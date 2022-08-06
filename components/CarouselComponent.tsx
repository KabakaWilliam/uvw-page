import { Carousel } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";
import userData from "../Data/sampleData.json";

const CarouselComponent = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);

  return (
    <div className="carousel my-[7vh] mx-auto">
      <div className="w-[657px] h-[552px] border border-black flex flex-col  items-center">
        <div className=" w-[627px] h-[448px] flex flex-col items-center pt-5">
          {selectedUser.userMedia ? (
            <Carousel slide={false}>
              {selectedUser.userMedia.map((link) => (
                <img
                  key={Math.random()}
                  src={link}
                  className=" w-[627px] h-[448px] object-cover"
                />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="p-5" />
        <span className="font-sans text-[#CCCCCC] text-[18px]">
          Photo/Video Description goes here
        </span>
      </div>
    </div>
  );
};

export default CarouselComponent;
