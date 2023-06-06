import { Button, ButtonGroup } from "@chakra-ui/react";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row px-2 bg-black text-white h-[30rem] hero">
      <div className="lg:w-1/2 sm:px-20 flex flex-col items-center justify-center gap-4">
        <span className="px-4 text-2xl sm:text-3xl md:text-4xl w-full  font-semibold text-left">
          Order Custom Art, unveil unique masterpieces from across the globe...
        </span>
        <span className="self-start px-4">
          <button className="font-semibold  bg-black px-4 py-2 border-2 border-[#593A36] rounded hover:bg-[#593A36] active:bg-[#402a27] transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1">
            Explore now
          </button>
        </span>
      </div>
      <div className="lg:w-1/2 sm:px-20 flex flex-col items-center justify-center gap-4">
        <span className="px-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-left">
          Are you an Artist? join now for freelance opportunities worldwide...
        </span>
        <span className="self-start px-4">
          <button className="font-semibold  bg-black px-4 py-2 border-2 border-[#593A36] rounded hover:bg-[#593A36] active:bg-[#402a27] transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1">
            Join now
          </button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
