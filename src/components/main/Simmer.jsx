import React from "react";

const Simmer = () => {
  return (
    <div>
      <div className=" shadow rounded-md p-4  w-full h-[70vh] mx-auto bg-white mt-5">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-300 rounded w-40"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[55vh] bg-gray-300 rounded m-6 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Simmer;
