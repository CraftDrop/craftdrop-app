import { GiPencilBrush } from "react-icons/gi";

const Info = () => {
  return (
    <div className="flex items-center justify-around overflow-x-auto py-8 gap-4 lg:gap-0">
      <div className="flex flex-col items-center w-[20rem] bg-[#564542] gap-2 px-8 py-4 border-2 rounded-3xl border-[#593A36] flex-shrink-0 flex-grow-0 transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1">
        <GiPencilBrush className="w-8 h-8" />
        <span className="font-bold text-xl">Authentic, hand-crafted</span>
        <span className="text-sm italic">
          Discover an exquisite collection of genuine, meticulously crafted and
          affordable pieces sourced from talented artists spanning the globe.
        </span>
      </div>
      <div className="flex flex-col items-center w-[20rem]  bg-[#564542] gap-2 px-8 py-4 border-2 rounded-3xl border-[#593A36] flex-shrink-0 flex-grow-0 transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1">
        <GiPencilBrush className="w-8 h-8" />
        <span className="font-bold text-xl">Personalize, customize</span>
        <span className="text-sm italic">
          Simply upload an image or file of your choice and commission a skilled
          artist to bring it to life in your desired medium.
        </span>
      </div>
      <div className="flex flex-col items-center w-[20rem] bg-[#564542] gap-2 px-8 py-4 border-2 rounded-3xl border-[#593A36] flex-shrink-0 flex-grow-0 transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1">
        <GiPencilBrush className="w-8 h-8" />
        <span className="font-bold text-xl">Ship worldwide</span>
        <span className="text-sm italic">
          No matter where you are, we offer worldwide shipping with a risk-free
          guarantee. Rest assured, we'll deliver your order to your doorstep
        </span>
      </div>
    </div>
  );
};

export default Info;
