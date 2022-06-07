import { useEffect, useState } from "react";

interface props {
  imgLink: string;
}
const FaceBubble = ({ imgLink }: props) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={
        !hidden ? " w-[60px] h-[60px]  rounded-full bg-gray-300 z-40" : "hidden"
      }
    >
      <img
        src={imgLink}
        alt=""
        className="w-[100%] h-[100%] object-cover rounded-full"
      />
    </div>
  );
};

export default FaceBubble;
