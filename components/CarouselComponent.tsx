import { Carousel } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";
import userData from "../Data/sampleData.json";

const CarouselComponent = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-[7vh] mx-auto">
      <div className="w-[657px] h-[552px] border border-black flex flex-col  items-center">
        <div className=" w-[627px] h-[448px] flex flex-col items-center pt-5">
          {selectedUser.userMedia ? (
            <Carousel slide={false}>
              {selectedUser.userMedia.map((link) => (
                <img src={link} className=" w-[627px] h-[448px] object-cover" />
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
