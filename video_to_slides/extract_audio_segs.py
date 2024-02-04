import os
from pydub import AudioSegment

def extract_audio_segments(audio_path, output_dir, output_dir_path, last_timestamp):
    audio = AudioSegment.from_file(audio_path)
    timestamps = []
    slide_no = []
    files = os.listdir(output_dir_path)
    for file_name in files:
        timestamp = file_name.split('jpg')[0][:-1].split('_')[1]
        timestamps.append(float(timestamp))
        slide_no.append(file_name.split('_')[0])
    combined_arrays = list(zip(timestamps, slide_no))
    sorted_combined_arrays = sorted(combined_arrays, key=lambda x: x[0])
    timestamps, slide_no = zip(*sorted_combined_arrays)
    timestamps = list(timestamps)
    slide_no = list(slide_no)
    timestamps.append(last_timestamp)
    # segments = []
    for i in range(len(timestamps) - 1):
        start_time = timestamps[i]
        end_time = timestamps[i + 1]
        segment = audio[start_time:end_time]
        filename = f"{slide_no[i]}_{start_time}_{end_time}.mp3"
        os.makedirs(output_dir+'/audio_segs/', exist_ok=True)
        segment.export(os.path.join(output_dir+'/audio_segs/', filename), format="mp3")
        # segments.append(segment)
    # return segments