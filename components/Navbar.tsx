import { AdjustmentsIcon } from "@heroicons/react/outline";
import OccupationOptions from "./OccupationOptions";

const Navbar = () => {
  return (
    <div className="w-screen h-[7vh] bg-[#333333] flex gap-x-5 items-center justify-center">
      <div className="font-sans text-[#CCCCCC] text-[18px]">Occupation</div>
      <div className="w-[306px] h-[45px] rounded-[7px] bg-white flex items-center justify-center text-[#333333] font-sans">
        <div className="w-[255px] h-[100%] flex items-center justify-end pr-[100px] a">
          All
        </div>
        <div className="w-[51px] h-[100%] flex items-center justify-center cursor-pointer group">
          <div className="w-[46px] h-[40px] rounded-[7px] bg-[#333333] flex items-center justify-center group-hover:bg-[#555353] relative">
            <AdjustmentsIcon className="rotate-90 h-[15px] text-[#CCCCCC] group-hover:text-[#f8f7f7] " />
            {/* <OccupationOptions /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
