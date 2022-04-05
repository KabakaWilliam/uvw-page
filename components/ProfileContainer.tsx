import React from "react";

const ProfileContainer = () => {
  return (
    <div className="w-screen h-[93vh]  ">
      <div className="mx-[20vw] h-[100%] w-[60vw]  flex">
        <div className="w-[50%] h-[100%] ">
          <div className="w-[100%] h-[90%] mt-[10vh] flex items-start justify-center">
            <div className="w-[70%] h-[50%] ">
              <div className="w-[100%] h-[20%]  font-sans font-bold">
                <div>Bangladeshi</div>
                <div>Doha,Qatar</div>
              </div>
              <div className="w-[50%]  h-[30%] text-[40px] font-sans">
                Safin <span className="font-bold">Hassan</span>
              </div>
              <div className="w-[100%] h-[50%] font-sans font-light text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt necessitatibus ut doloribus, quos consequatur veritatis
                quidem perspiciatis saepe exercitationem odio quibusdam
                consequuntur voluptatibus dolorum molestiae pariatur corrupti
                voluptatem nihil! Amet.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] ">
          <div className="w-[100%] h-[90%] mt-[10vh] flex items-start justify-center">
            <div className="w-[70%] h-[60%] border-[10px] border-black "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
