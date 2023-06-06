import "../App.css";
import Features from "../components/featureCarousel";
import Hero from "../components/hero";
import Info from "../components/info";
import Trending from "../components/trending";
import artData from "../testData/artData.json";
import artistsData from "../testData/artistsData.json";
import categoryData from "../testData/categoryData.json";
import giftData from "../testData/giftData.json";
import CustomArtBanner from "../components/customArtBanner";
import ArtCarousel from "../components/artCarousel";
import FeatureCarousel from "../components/featureCarousel";
import Layout from "../layout";
import NavCarousel from "../components/navCarousel";

function Home() {
  return (
    <Layout>
      <NavCarousel />
      <Hero />
      <Info />
      <FeatureCarousel label="Featured" data={artData} />
      <CustomArtBanner />
      <Trending artData={artData} artistsData={artistsData} />
      <Features label="Notable Collections" data={artData} />
      <ArtCarousel label="Gift Ideas" data={giftData} />
      <ArtCarousel label="Explore Categories" data={categoryData} />
    </Layout>
  );
}

export default Home;
