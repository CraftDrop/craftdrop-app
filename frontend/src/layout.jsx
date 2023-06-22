import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import auth from "./services/authService";

const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await auth.getCurrentUser();
      setCurrentUser(user);
    }
    fetchCurrentUser();
  }, []);
  return (
    <div className="App bg-black text-white flex flex-col gap-4">
      <Navbar user={currentUser} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
