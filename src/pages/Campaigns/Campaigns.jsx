import React from "react";
import Navbar from "../../components/Navbar";
// @ts-ignore
import addCircle from "../assets/add-circle.svg";

const Campaigns = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />

      <div className="p-16">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-8">Your Campaigns</span>
            <span className="text-base font-normal text-slate-400 leading-8">
              Check the list of campigns you created{" "}
            </span>
          </div>
          <div>
            <button className="flex flex-row bg-[#0F6EFF] px-5 py-3 rounded-xl text-white gap-3">
              <img src={addCircle} alt="" className="mt-[0.10rem]" />
              <span> Create new campaign</span>
            </button>
          </div>
        </div>

        <div>components</div>
      </div>
    </div>
  );
};

export default Campaigns;
