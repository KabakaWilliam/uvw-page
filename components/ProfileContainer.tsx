import React from "react";
import Sidebar from "./Sidebar";
import UserDescription from "./UserDescription";
import UserMedia from "./UserMedia";

const ProfileContainer = () => {
  return (
    <div className="w-screen h-[93vh] bg-[#0F3649] overflow-hidden flex items-start  ">
      <Sidebar />
      <UserDescription />
      <UserMedia />
    </div>
  );
};

export default ProfileContainer;
