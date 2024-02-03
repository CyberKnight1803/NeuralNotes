import Link from 'next/link';
import React from 'react';
import { FaClapperboard } from 'react-icons/fa6';

const AddCustomVideo = () => {
  return (
    <>
      <div className="py-10 w-1/2 mx-auto">
        <div className="w-full py-10 mx-auto border-2 border-black border-dashed flex justify-around items-center">
          <div>
            <p className="text-xl">Drag and drop Video File</p>
            <p className="text-gray-700">Accepted files: mpeg</p>
          </div>
          <button className=" bg-[#D99F03] hover:bg-[#b08d2e] border-2 border-black text-black font-bold py-2 px-4 rounded">
            Upload Video
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <input
          type="text"
          className="customInput"
          placeholder="Paste your link here..."
        />
        <br />
        <a href="#" className="btn">
          Generate my PDF
        </a>
      </div>
      <div className="w-1/2 mx-auto py-10">
        <div className="h-64 bg-gray-300"></div>
        <button className="py-2 px-4 my-4 rounded bg-red-600 font-bold border-black border-2 text-black">
          Save to my Lib
        </button>
      </div>
    </>
  );
};

export default AddCustomVideo;
