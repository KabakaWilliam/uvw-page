import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import NavOptionState from "../atoms/NavOptionsState";
import OccupationOptions from "./OccupationOptions";

const Navbar = () => {
  const [optionsHidden, setOptionsHidden] = useRecoilState(NavOptionState);

  const vizHandler = () => {
    if (optionsHidden) {
      setOptionsHidden(false);
    } else {
      setOptionsHidden(true);
    }
  };
  console.log("viz options:", optionsHidden);
  return (
    <div className="w-screen h-[7vh] bg-[#0F3649] flex gap-x-5 items-center justify-center border border-[#59D6F6]">
      <div className="font-sans text-[#CCCCCC] text-[18px]">Occupation</div>
      <div className="w-[40%] md:w-[306px] h-[45px] rounded-[7px] bg-white flex items-center justify-center text-[#333333] font-sans">
        <div className="w-[255px] h-[100%] flex items-center justify-end pr-[100px] a">
          All
        </div>
        <div className="w-[51px] h-[100%] flex items-center justify-center cursor-pointer group">
          <div className="w-[46px] h-[40px] rounded-[7px] bg-[#0F3649] flex items-center justify-center group-hover:bg-[#555353] relative">
            <AdjustmentsIcon
              onClick={vizHandler}
              className="rotate-90 h-[15px] text-[#CCCCCC] group-hover:text-[#f8f7f7]  "
            />
            {/* <OccupationOptions /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
