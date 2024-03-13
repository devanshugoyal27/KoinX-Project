import React from "react";

const ShimmerUi = () => {
  return (
    <div>
      <div className=" shadow rounded-md p-4  w-full  mx-auto bg-white mt-5">
        <div className="animate-pulse mt-5">
          <div className="h-3 bg-slate-300 rounded w-[90%] mx-auto mb-10"></div>

          <div className="h-3 bg-slate-300 rounded w-[90%] mx-auto "></div>
        </div>
        <div className="mt-10 animate-pulse flex justify-between px-10">
        <div className="flex gap-8 flex-col w-[30%]">
        <div className="h-3 bg-slate-300 rounded  "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        
        </div>


        <div className="flex gap-8 flex-col w-[30%]">
        <div className="h-3 bg-slate-300 rounded  "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        <div className="h-3 bg-slate-300 rounded "></div>
        
        </div>

        </div>
      </div>
    </div>
  );
};

export default ShimmerUi;
