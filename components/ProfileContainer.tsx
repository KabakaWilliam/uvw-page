import React from "react";
import Sidebar from "./Sidebar";
import UserInfoSection from "./UserInfoSection";

const ProfileContainer = () => {
  return (
    <div className="w-screen h-[93vh] bg-[#0F3649] overflow-hidden flex items-start  ">
      <Sidebar />
      <UserInfoSection />
    </div>
  );
};

export default ProfileContainer;
