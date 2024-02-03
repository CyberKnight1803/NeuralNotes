import React from 'react';

const AddCustomVideo = () => {
  return (
    <>
      <div className="py-10">
        <div className="w-full py-10 mx-auto border-2 border-black border-dashed flex justify-around items-center">
          <div>
            <h1>Drag and drop Video File</h1>
            <h2 className="text-gray-700">Accepted files: mpeg</h2>
          </div>
          <button className="bg-[#D99F03] hover:bg-[#b08d2e] border-2 border-black text-black font-bold py-2 px-4 rounded">
            Upload Video
          </button>
        </div>
      </div>

      <div>
        <input
          type="text"
          className="customInput"
          placeholder="Paste your link here..."
        />
        <a href="#" className="btn">
          Generate my PDF
        </a>
      </div>
      
      <div className="py-20">
        <div className="h-64 bg-gray-300"></div>
        <button className="py-2 px-4 my-4 rounded bg-[#FF7550] font-bold border-black border-2 text-black">
          Save to my Lib
        </button>
      </div>
    </>
  );
};

export default AddCustomVideo;
