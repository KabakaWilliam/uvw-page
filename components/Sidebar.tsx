import { useRecoilState } from "recoil";
import SelectedUserState from "../atoms/SelectedUserState";
import PersonWidget from "./PersonWidget";
import userData from "../Data/sampleData.json";
// export type JSONData = typeof userData;
const Sidebar = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);
  return (
    <div className="w-[20vw] h-[screen] border border-black border-r-0 flex flex-col items-center justify-center">
      {userData.map((data) => (
        <PersonWidget
          individualData={data}
          key={data.id}
          // name={data.name}
          // industry={data.industry}
          // age={data.age}
          // country={data.country}
          // profilePicture={data.profilePhoto}
        />
      ))}
    </div>
  );
};

export default Sidebar;
