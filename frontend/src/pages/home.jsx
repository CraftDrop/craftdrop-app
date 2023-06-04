import "../App.css";
import Features from "../components/features";
import Hero from "../components/hero";
import Info from "../components/info";
import Navbar from "../components/navbar";
import Trending from "../components/trending";

function Home() {
  return (
    <div className="App bg-black text-white">
      <Navbar />
      <Hero />
      <Info />
      <Features />
      <Trending />
    </div>
  );
}

export default Home;
