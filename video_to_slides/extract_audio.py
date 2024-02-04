from pydub import AudioSegment
from pydub.utils import mediainfo

def extract_audio_pydub(video_path, output_audio_path):
    video_info = mediainfo(video_path)
    video_duration = float(video_info['duration'])
    video_clip = AudioSegment.from_file(video_path)
    audio_clip = video_clip[:int(video_duration * 1000)]
    audio_name = output_audio_path.split('out')[0] + 'audio.mp3'
    audio_clip.export(output_audio_path+'/'+audio_name, format="mp3")
    return output_audio_path+'/'+audio_name