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
    <div className="max-w-[5.125rem] h-[59.3125rem] bg-[#001738] flex flex-col justify-start items-center p-4 gap-8">
      <div className="mt-8 mb-10">
        <img src={Logo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span>
          <img src={house} alt="" className="h-[1.31rem] w-[1.31rem] " />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-8">
            Home
          </p>
        </span>
        <span>
          <img src={VolumeHigh} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-8">
            Campaign
          </p>
        </span>
        <span>
          <img src={profile} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-8">
            Product
          </p>
        </span>
        <span>
          <img src={bag} alt="" className="h-[1.31rem] w-[1.31rem]" />
          <p className="text-gray-50 font-normal text-[0.625rem] leading-8">
            Customers
          </p>
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
