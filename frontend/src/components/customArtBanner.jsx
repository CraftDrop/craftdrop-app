import React from "react";
import ButtonSecondary from "./common/buttonSecondary";

const CustomArtBanner = () => {
  return (
    <div className="flex flex-col p-4 mx-4 lg:mx-8 rounded-lg bg-[#593A36] gap-4">
      <div className="overflow-hidden w-full">
        <h1 className="text-sm md:text-base animate-marquee">
          <span className="">
            Give the perfect gift. Whether it's for a cherished friend, a valued
            colleague, a special someone, or even yourself, unlock the power of
            customization by commissioning a talented artist today.
          </span>
        </h1>
      </div>
      <div>
        <ButtonSecondary label="Order custom art" />
      </div>
    </div>
  );
};

export default CustomArtBanner;
