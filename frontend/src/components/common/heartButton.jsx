import { color } from "framer-motion";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HeartButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="cursor-pointer">
      {isClicked ? (
        <AiFillHeart
          onClick={handleClick}
          size={24}
          className="hover:scale-125 transition ease-in-out duration-500"
          color="red"
          label="view collection"
        />
      ) : (
        <AiOutlineHeart
          onClick={handleClick}
          size={24}
          className="hover:scale-125 transition ease-in-out duration-500"
          label="view collection"
        />
      )}
    </div>
  );
};

export default HeartButton;
