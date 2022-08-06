import React from "react";
import Sidebar from "./Sidebar";
import UserInfoSection from "./UserInfoSection";
import userData from "../Data/sampleData.json";

const ProfileContainer = () => {
  return (
    <div className="w-screen h-[93vh] bg-[#0F3649] overflow-hidden flex items-start  ">
      <Sidebar />
      <UserInfoSection />
    </div>
  );
};

export default ProfileContainer;
