const Sidebar = () => {
  return (
    <div className="w-[20vw] h-[screen] border border-black border-r-0 flex flex-col items-center justify-center">
      <div className="w-[100%] h-[60px]  border-r-0 bg-[#EDEDED] font-sans text-black font-bold">
        <span className="pl-5 w-[95%] h-[100%] flex items-center justify-start">
          People
        </span>
      </div>
      <div className="flex w-[100%] h-[100px] border border-b-0 border-black border-r-0">
        <div className="w-[30%] h-[100%]  flex items-center justify-center">
          <img
            className="w-[80%] h-[80%] object-cover rounded-lg"
            src="https://qph.cf2.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp"
            alt=""
          />
        </div>
        <div className="pl-[5px]">
          <div className="text-black font-bold font-sans text-[24px]">
            Linus Gordon
          </div>
          <div className="text-[#7F7F7F] font-sans">Food -29yo 🇧🇮</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
