import React from 'react';
import { FaClapperboard } from 'react-icons/fa6';
const UploadVideo = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center py-10 text-2xl font-bold">
        Upload Video
      </h1>
      <div className="w-1/3 p-10 mx-auto border-2 border-black border-dashed">
        <figure className="flex justify-center text-5xl text-gray-600">
          <FaClapperboard />
        </figure>
        <div className="text-center py-4">
          <p>Drag and drop Video File</p>
          <p className="py-2 text-xl">or</p>
        </div>
        <button className="w-full bg-[#00AEA6] hover:bg-[#00aea5dd] text-white font-bold py-2 px-4 rounded">
          Browse
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;
