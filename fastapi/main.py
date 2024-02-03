import os 
from dotenv import load_dotenv

from fastapi import FastAPI
from openai import OpenAI

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')


client = OpenAI(api_key=OPENAI_API_KEY)

app = FastAPI()

@app.get('/')
async def health_checker():
    return {
        'message': 'API Health Checker'
    }

@app.get('/gpt-prompt-test')
async def gpt_prompt_test():

    response = client.chat.completions.create(
        model="gpt-4", 
        temperature=0, 
        messages=[
            {
                "role": "system", 
                "content": "You are highly skilled program who can write any program and explain it in short."
            },
            {
                "role": "user", 
                "content": "Explain binary search"
            }
        ]
    )

    return {
        'message': response.choices[0].message.content
    }