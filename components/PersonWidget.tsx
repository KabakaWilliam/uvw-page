import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";
import { selectedUser } from "../types/selectedUser";

interface personWidgetProps {
  individualData: selectedUser;
}
const PersonWidget = ({ individualData }: personWidgetProps) => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);
  const selectUserHandler = async () => {
    setSelectedUser(individualData);
    console.log(individualData, "selected");
  };
  useEffect(() => {
    console.log("heres the selected user inside use-effect:", selectedUser);
  }, [selectedUser]);
  return (
    <div
      onClick={() => selectUserHandler()}
      className="flex w-[100%] h-[100px] border border-b-0 border-black border-r-0 cursor-pointer hover:bg-[#2f5a70]"
    >
      <div className="w-[30%] h-[100%]  flex items-center justify-center">
        <img
          className="w-[80%] h-[80%] object-cover border border-black"
          src={individualData.profilePhoto}
          alt=""
        />
      </div>
      <div className="pl-[20px] w-[70%] h-[100%] flex flex-col justify-center">
        <div className="text-[#59D6F6] font-bold font-sans text-[24px] truncate">
          {individualData.name}
        </div>
        <div className="text-[#7F7F7F] text-[18px] font-sans flex gap-x-2 ">
          <span>{individualData.industry}</span>
          <span> - </span>
          <span>{individualData.age} yo </span>
          <span> {individualData.flag} </span>
        </div>
      </div>
    </div>
  );
};

export default PersonWidget;
