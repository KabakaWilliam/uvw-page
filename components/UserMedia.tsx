import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const UserMedia = () => {
  return (
    <div className=" w-[43vw] h-screen flex pt-[7vh] justify-center BT ">
      <div className="relative w-[657px] h-[552px] border border-black flex flex-col items-center pt-5">
        <img
          src="https://cdn.mos.cms.futurecdn.net/CT5CNXjsQLaWrqVg7WYnzR-1200-80.jpg"
          alt=""
          className="object-cover w-[627px] h-[448px]"
        />
        <div className="w-[583px] h-[55px] pt-3 font-sans text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          magna mauris.
        </div>
        <div className="absolute w-[90%] h-[80%] flex items-center">
          <div className="w-[50%] h-[100%] flex items-center justify-start">
            <ChevronLeftIcon className="text-gray-100 h-8 cursor-pointer" />
          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-end">
            <ChevronRightIcon className="text-gray-100 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMedia;
