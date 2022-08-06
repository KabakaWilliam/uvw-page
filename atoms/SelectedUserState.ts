import { atom } from "recoil";
import { selectedUser } from "../types/selectedUser";

const SelectedUserState = atom({
  key: "SelectedUserState",
  default: {} as selectedUser,
});

export default SelectedUserState;
