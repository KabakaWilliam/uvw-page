import { useRef } from "react";
import { useRecoilState } from "recoil";
import { useOnClickOutside } from "usehooks-ts";
import NavOptionState from "../atoms/NavOptionsState";

const NavOptions = () => {
  const [optionsHidden, setOptionsHidden] = useRecoilState(NavOptionState);

  const ref = useRef(null);
  const handleClickOutside = () => {
    // Your custom logic here
    setOptionsHidden(true);
  };

  const handleClickInside = () => {
    // Your custom logic here
    console.log("clicked inside");
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      className="font-sans border border-red-400 w-screen  h-max md:h-[164px] flex justify-center items-center gap-y-[30px] md:gap-y-0 gap-x-[80px] flex-wrap px-[100px] "
    >
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center hover:bg-red-400">
        All
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Housekeeping
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Security
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Food
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Services
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Healthcare
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Garments
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Hospitality
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Lorem
      </div>
      <div className="text-black w-[200px] h-[45px] rounded-[7px] border flex items-center justify-center">
        Lorem
      </div>
    </div>
  );
};

export default NavOptions;
