import React from "react";
import Navbar from "./Layout/Navbar";
import Menubar from "./Layout/Menubar";
import Footer from "./Layout/Footer";

const Flicker = () => {
  return (
    <div className="w-full flex">
      <div>
        <Menubar />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      <Footer/>
    </div>
  );
};

export default Flicker;
