import { useEffect, useState } from "react";

interface props {
  imgLink: string;
  right?: boolean;
}
const FaceBubble = ({ imgLink, right }: props) => {
  const [hidden, setHidden] = useState(false);
  const BubbleStyle = {
    top: `${Math.floor(Math.random() * 100)}vh`,
    left: right
      ? `-${Math.floor(Math.random() * 100)}vw`
      : `${Math.floor(Math.random() * 100)}vw`,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={BubbleStyle} className={`z-40 absolute animate-fade-in-up `}>
      <div
        className={
          !hidden
            ? " w-[60px] h-[60px]  rounded-full bg-gray-300 z-40"
            : "hidden"
        }
      >
        <img
          src={imgLink}
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default FaceBubble;
