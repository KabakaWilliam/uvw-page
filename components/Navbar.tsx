import { AdjustmentsIcon } from "@heroicons/react/outline";
const Navbar = () => {
  return (
    <div className="w-screen h-[7vh] bg-gray-500 flex">
      <div className="flex w-[30%] h-[100%] items-center justify-end  font-sans ">
        <span className="text-white mr-3">Occupation</span>
        <AdjustmentsIcon className="h-10 rotate-90" />
      </div>

      <ul className="flex justify-start items-center w-[70%] h-[100%]  font-sans font-bold">
        <li className="w-[14%] h-[100%] flex items-center hover:bg-gray-100 text-white justify-center cursor-pointer hover:text-gray-600 ">
          Housekeeping
        </li>
        <li className="w-[14%] h-[100%] flex items-center hover:bg-gray-100 text-white justify-center cursor-pointer hover:text-gray-600">
          Construction
        </li>
        <li className="w-[14%] h-[100%] flex items-center hover:bg-gray-100 text-white justify-center cursor-pointer hover:text-gray-600">
          Healthcare
        </li>
        <li className="w-[14%] h-[100%] flex items-center hover:bg-gray-100 text-white justify-center cursor-pointer hover:text-gray-600">
          Food
        </li>
        <li className="w-[14%] h-[100%] flex items-center hover:bg-gray-100 text-white justify-center cursor-pointer hover:text-gray-600">
          Security
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
