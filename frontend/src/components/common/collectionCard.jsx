import ButtonPrimary from "./buttonPrimary";
import { GoVerified } from "react-icons/go";
import HeartButton from "./heartButton";

const CollectionCard = ({ data, index }) => {
  return (
    <div className="flex justify-center text-sm lg:text-base w-full px-4 lg:px-8">
      <div className="bg-gray-800 bg-opacity-75 rounded-3xl overflow-hidden relative w-full min-h-[20rem] max-h-[20rem] sm:min-h-[25] sm:max-h-[25] lg:max-h-[35rem]">
        <div className="opacity-30">
          <img
            src={data[index].image}
            alt={data[index].title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-between absolute text-white bottom-[1rem] lg:bottom-[3rem] px-4 lg:px-8 font-semibold w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl lg:text-4xl font-bold">
              {data[index].title}
            </h1>
            <h1 className="flex items-center gap-1">
              By {data[index].artist} <GoVerified className="text-green-500" />
            </h1>
            <h1>9 items</h1>
          </div>
          <div className="self-end hidden sm:block">
            <ButtonPrimary label="view collection" />
          </div>
        </div>
        <div className="self-end absolute top-[1rem] lg:top-[2rem] right-[1rem]">
          <HeartButton />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
