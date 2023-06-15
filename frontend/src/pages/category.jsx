import { useEffect, useState } from "react";
import CategoryCarousel from "../components/categoryCarousel";
import CollectionCarousel from "../components/collectionCarousel";
import FeatureCarousel from "../components/featureCarousel";
import Trending from "../components/trending";
import Layout from "../layout";
import artData from "../testData/artData.json";
import artistsData from "../testData/artistsData.json";

const Category = () => {
  const [active, setIsActive] = useState(false);
  const [selected, setSelected] = useState("portrait");
  const [sortedData, setSortedData] = useState([]);
  const [sortGroup, setSortGroup] = useState("subject");

  const handleSelect = (item, sortName) => {
    setSelected(item);
    setIsActive(true);
    setSortGroup(sortName);
  };

  const handleSort = () => {
    const sorted = artData.filter(
      (item) => item[sortGroup]?.toLowerCase() === selected.toLowerCase()
    );
    setSortedData(sorted);
    console.log(sorted);
  };

  useEffect(() => {
    handleSort();
  }, [sortGroup, selected]);

  return (
    <Layout>
      <CategoryCarousel
        handleSelect={handleSelect}
        selected={selected}
        sortGroup={sortGroup}
      />
      {selected.length > 0 &&
        (sortedData.length > 0 ? (
          <FeatureCarousel
            label={selected.length === 2 ? selected + "% Off" : selected}
            data={sortedData}
          />
        ) : (
          <div className="font-semibold text-2xl italic">No Items Found</div>
        ))}

      <FeatureCarousel label="Latest Additions" data={artData} />
      <FeatureCarousel label="Popular" data={artData} />
      <Trending
        artData={artData}
        artistsData={artistsData}
        tab1="Trending"
        tab2="Top Paintings"
      />
      <CollectionCarousel label="Collections" data={artData} />
      <FeatureCarousel label="Paintings" data={artData} />
      <FeatureCarousel label="Drawings" data={artData} />
      <FeatureCarousel label="Sculpture" data={artData} />
      <FeatureCarousel label="AI / Digital" data={artData} />
      <FeatureCarousel label="Collage" data={artData} />
      <FeatureCarousel label="Photography" data={artData} />
      <FeatureCarousel label="Printmaking" data={artData} />
    </Layout>
  );
};

export default Category;
