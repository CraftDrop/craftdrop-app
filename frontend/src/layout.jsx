import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <div className="App bg-black text-white flex flex-col gap-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
