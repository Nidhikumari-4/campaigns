import React from "react";
// @ts-ignore
import crown from "../assets/crown.svg";
// @ts-ignore
import gift from "../assets/gift.svg";
// @ts-ignore
import notification from "../assets/notification.svg";
// @ts-ignore
import unsplashImg from "../assets/unsplash.svg";
// @ts-ignore
import group from "../assets/Group.svg";
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="max-w-[85.8125rem] h-[5rem] bg-[#FFF] border-b-2 boder-[#DAE6FF] p-3">
      <div className="flex items-center justify-end gap-3">
        <span className="text-xs font-normal text-slate-600 p-2 text-center leading-8">
          Free trial ends in 2 days
        </span>
        <span className="flex text-[#FF8C00] bg-[#F29A2E1A] items-center text-xs font-normal px-2 rounded-md ">
          <img
            src={crown}
            alt="crown"
            className="h-[1.25rem] w-[1.25rem] mt-2"
          />
          <p className="text-xs">Buy Plan</p>
        </span>

        <img src={gift} alt="" className="h-[1.25rem] w-[1.25rem]" />
        <img src={notification} alt="" className="h-[1.25rem] w-[1.25rem] " />

        <span className="flex items-center gap-[0.30rem]">
          <img src={unsplashImg} alt="" className="h-[1.75rem] w-[1.75rem] " />
          <p className="text-xs">Mukund cake shop</p>
          <RiArrowDownSFill className="h-[2rem] w-[1rem]" />
        </span>

        <img src={group} alt="" className="h-[1.25rem] w-[1.25rem] " />
      </div>
    </div>
  );
};

export default Navbar;
