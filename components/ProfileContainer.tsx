import React from "react";
import Sidebar from "./Sidebar";
import UserDescription from "./UserDescription";
import UserInfoSection from "./UserInfoSection";
import UserMedia from "./UserMedia";

const ProfileContainer = () => {
  return (
    <div className="w-screen h-[93vh] bg-[#0F3649] overflow-hidden flex items-start  ">
      <Sidebar />
      <UserInfoSection />
    </div>
  );
};

export default ProfileContainer;
