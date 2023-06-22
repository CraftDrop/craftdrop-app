import "../App.css";
import Hero from "../components/hero";
import Info from "../components/info";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="App bg-black text-white">
      <Navbar />
      <Hero />
      <Info />
    </div>
  );
}

export default Home;
