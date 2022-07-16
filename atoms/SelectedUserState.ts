import { atom } from "recoil";

const SelectedUserState = atom({
  key: "SelectedUserState",
  default: "",
});

export default SelectedUserState;
