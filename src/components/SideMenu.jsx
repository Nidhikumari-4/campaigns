import React from "react";
// @ts-ignore
import Logo from "../assets/Logo.svg";
// @ts-ignore
import house from "../assets/house.svg";
// @ts-ignore
import VolumeHigh from "../assets/VolumeHigh.svg";
// @ts-ignore
import bag from "../assets/bag.svg";
// @ts-ignore
import profile from "../assets/profile-2user.svg";

const SideMenu = () => {
  return (
    <div className="max-w-[5.125rem] h-screen bg-[#001738] flex flex-col justify-start items-center p-4 gap-8">
      <div className="mt-8 mb-10">
        <img src={Logo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="flex flex-col items-center ">
          <img src={house} alt="" className="h-[1.31rem] w-[1.31rem] " />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-6">
            Home
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img src={VolumeHigh} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-6">
            Campaign
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img src={bag} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-6">
            Product
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img src={profile} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-6">
            Customers
          </p>
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
