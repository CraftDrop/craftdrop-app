import "../App.css";
import Features from "../components/features";
import Hero from "../components/hero";
import Info from "../components/info";
import Navbar from "../components/navbar";
import Trending from "../components/trending";
import artData from "../testData/artData.json";
import artistsData from "../testData/artistsData.json";
import CustomArtBanner from "../components/customArtBanner";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App bg-black text-white flex flex-col gap-2">
      <Navbar />
      <Hero />
      <Info />
      <Features label="Featured" data={artData} />
      <bbCustomArtBanner />
      <Trending artData={artData} artistsData={artistsData} />
      <Features label="Notable Collections" data={artData} />
      <Footer />
    </div>
  );
}

export default Home;
