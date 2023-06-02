import { ChakraProvider } from "@chakra-ui/react";
import "../App.css";
import Features from "../components/features";
import Hero from "../components/hero";
import Info from "../components/info";
import Navbar from "../components/navbar";

function Home() {
  return (
    <ChakraProvider>
      <div className="App bg-black text-white">
        <Navbar />
        <Hero />
        <Info />
        <Features />
      </div>
    </ChakraProvider>
  );
}

export default Home;
