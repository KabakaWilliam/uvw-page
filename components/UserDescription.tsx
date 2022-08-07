import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";

const UserDescription = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);
  return (
    <div className="w-[37vw] h-screen border pt-[7vh] border-black px-[50px]">
      <div className="text-[50px] text-[#59D6F6]">
        {selectedUser.name == "" ? "Linus Gordon" : selectedUser.name}
      </div>
      <div className="font-sans text-[18px] flex gap-x-[27px]">
        <div className="w-max cursor-pointer text-[#CCCCCC] border border-[#59D6F6]  hover:bg-[#0d4451] rounded-[22px] px-3 py-2">
          {selectedUser.country} {selectedUser.flag}
        </div>
        <div className="w-max cursor-pointer text-[#CCCCCC] border border-[#59D6F6] hover:bg-[#0d4451] rounded-[22px] px-3 py-2">
          {selectedUser.job}
        </div>
      </div>
      <div className="mt-[40px] font-sans text-[#CCCCCC] text-[18px]">
        {selectedUser.description}
      </div>
    </div>
  );
};

export default UserDescription;
