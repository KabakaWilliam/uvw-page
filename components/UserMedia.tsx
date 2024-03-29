import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";
import CarouselComponent from "./CarouselComponent";

const UserMedia = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);

  return (
    <CarouselComponent />
    // <div className=" w-[43vw] h-screen flex pt-[7vh] justify-center BT ">
    //   <div className="relative w-[657px] h-[552px] border border-black flex flex-col items-center pt-5">
    //     <img
    //       src="https://cdn.mos.cms.futurecdn.net/CT5CNXjsQLaWrqVg7WYnzR-1200-80.jpg"
    //       alt=""
    //       className="object-cover w-[627px] h-[448px]"
    //     />
    //     <div className="w-[583px] h-[55px] pt-3 font-sans text-[#333333]">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
    //       magna mauris.
    //     </div>
    //     <div className="absolute w-[90%] h-[80%] flex items-center">
    //       <div className="w-[50%] h-[100%] flex items-center justify-start">
    //         <ChevronLeftIcon className="text-gray-100 h-8 cursor-pointer" <button
    //   onClick={movePrev}
    //   className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
    //   disabled={isDisabled("prev")}
    // > />
    //       </div>
    //       <div className="w-[50%] h-[100%] flex items-center justify-end">
    //         <ChevronRightIcon  onClick={moveNext}
    // className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
    // disabled={isDisabled("next")} className="text-gray-100 h-8 cursor-pointer" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserMedia;
