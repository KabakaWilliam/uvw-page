import React from "react";

interface personWidgetProps {
  name: string;
  industry: string;
  age: number;
  country: string;
  profilePicture: string;
}
const PersonWidget = ({
  name,
  industry,
  age,
  country,
  profilePicture,
}: personWidgetProps) => {
  return (
    <div className="flex w-[100%] h-[100px] border border-b-0 border-black border-r-0 cursor-pointer hover:bg-[#2f5a70]">
      <div className="w-[30%] h-[100%]  flex items-center justify-center">
        <img
          className="w-[80%] h-[80%] object-cover border border-black"
          src={profilePicture}
          alt=""
        />
      </div>
      <div className="pl-[20px] w-[70%] h-[100%] flex flex-col justify-center">
        <div className="text-[#59D6F6] font-bold font-sans text-[24px] truncate">
          {name}
        </div>
        <div className="text-[#7F7F7F] text-[18px] font-sans flex gap-x-2 ">
          <span>{industry}</span>
          <span> - </span>
          <span>{age} yo </span>
          <span> {country} </span>
        </div>
      </div>
    </div>
  );
};

export default PersonWidget;
