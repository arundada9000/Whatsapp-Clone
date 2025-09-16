import React from "react";

const Storage = () => {
  return (
    <div className="flex flex-col gap-6 overflow-auto ">
      <h1 className="text-xl">Storage</h1>
      <div>
        <h2 className="text-lg">Automatic Downloads</h2>
        <p className="text-[12px] text-gray-300/80 leading-4">
          Choose which media will be automatically downloaded from the messages
          you receive
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-3 text-gray-300/90">
            <input
              type="checkbox"
              defaultChecked={true}
              className="w-5 h-5 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span className="text-sm">Photos</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300/80">
            <input
              defaultChecked={true}
              type="checkbox"
              className="w-5 h-5 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span className="text-sm">Audio</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300/80">
            <input
              defaultChecked={true}
              type="checkbox"
              className="w-5 h-5 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span className="text-sm">Videos</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300/80">
            <input
              defaultChecked={true}
              type="checkbox"
              className="w-5 h-5 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <span className="text-sm">Documents</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
