from typing import List
import os 
from dotenv import load_dotenv
import base64

from fastapi import FastAPI
from fastapi import Header, File, UploadFile, HTTPException
from openai import OpenAI

# from .routers import gpt, transcripts

# Load OpenAI API Key
load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

# OpenAI Client
client = OpenAI(api_key=OPENAI_API_KEY)

# Include Routers
app = FastAPI()
# app.include_router(gpt.router)
# app.include_router(transcripts.router)



@app.get('/')
async def health_checker():
    return {
        'message': 'API Health Checker'
    }

@app.post('/gpt-get-chunk-notes')
async def get_gpt4_chunk_notes(chunk_idx: int, course_name: str, transcript_file: UploadFile = File(...), image: UploadFile = File(...)):
    
    try:
        transcript = await transcript_file.read()
        contents = await image.read()
        base64_image = base64.b64encode(contents).decode("utf-8")
        base64_image = f"data:image/jpeg;base64,{base64_image}"

    except Exception as e:
        raise HTTPException(status_code = 500, detail = f"Error processing files: {str(e)}")

    prompt = f"""
Please convert this {'first' if chunk_idx == 0 else 'next'} chunk of transcription given below - 

{transcript}

and lecture slide for this chunk in {image.filename} photo into notes. 

Speak in 3rd person and follow these rules while generating notes strictly - 
1. You are to generate notes only in markdown
2. Write using bullet points only. You can use nested bullet points to make it more organized and readable. 
3. Bold necessary headings 
4. You may also write latex equations by only wrapping it in $ $ and not \( \). Example: $x = 10$
5. Do not output anything else apart from the markdown file.

Also, only include relevant information on the topic of this class: '{course_name}'.  Do not ever summarize the transcript given above or summarize your notes below.
"""

    response = client.chat.completions.create(
        model="gpt-4-vision-preview", 
        max_tokens=2000,
        messages=[
            {
                "role": "system", 
                "content": f"You are an expert in course '{course_name}' and perfectly articulate and knowledgable chatbot who can generate perfectly well articulated notes of lectures capturing all the important information for students. As a professional note-taker, you need to write notes which explains all the concepts perfectly well  and possibly include examples and explain them if given in the lecture so that any student can read and understand them.  Students prefer notes which give out as much information as possible so it becomes easy for them to understand."
            },
            {
                "role": "user", 
                "content": [
                    {
                        "type": "text", 
                        "text": prompt
                    }, 
                    {
                        "type": "image_url", 
                        "image_url": {
                            "url": base64_image
                        }
                    }
                ]
            }
        ]
    )

    return {
        'message': response.choices[0].message.content[13:-4]
    }


@app.post('/gpt-get-notes')
async def get_gpt_notes(course_name: str, chunk_transcript_files: List[UploadFile] = File(...), chunk_image_files: List[UploadFile] = File(...)):

    chunks = len(chunk_transcript_files)
    
    notes = ""

    for chunk_idx in range(chunks):
        response = await get_gpt4_chunk_notes(
            chunk_idx, 
            course_name,
            chunk_transcript_files[chunk_idx], 
            chunk_image_files[chunk_idx]
        )

        notes += response["message"]
    
    md_file = './data/output/temp.md'
    with open(md_file, 'w') as mdFile:
        mdFile.write(notes)
    
    os.system(f"pandoc -o {md_file}.pdf {md_file}")
    
    return {
        'message': 'Success'
    }
    
