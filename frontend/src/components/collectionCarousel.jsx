import React from "react";
import CollectionCard from "./common/collectionCard";
import Slideshow from "./common/slideshow";
import artData from "../testData/artData.json";

const CollectionCarousel = ({ label, data }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <div className="border-t-2 ml-4 lg:ml-8 h-4 border-gray-600 w-[2rem] mt-4 "></div>
        <div className="flex-shrink-0">
          <h1 className="text-left text-3xl font-semibold">{label}</h1>
        </div>
        <div className="border-t-2 h-4 border-gray-600 w-full mt-4"></div>
      </div>
      <Slideshow data={artData} component={CollectionCard} />
    </div>
  );
};

export default CollectionCarousel;
