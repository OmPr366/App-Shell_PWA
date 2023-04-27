import React, { useState } from "react";
import Navbar from "./Layout/Navbar";
import Menubar from "./Layout/Menubar";
import Footer from "./Layout/Footer";

const Flicker = () => {
  
  const [isSearched, setIsSearched] = useState(false);

  const searchHandler = () => {
    setIsSearched(true);
  };
  
  return (
    <div className="w-full flex">
      <div>
        <Menubar    />
      </div>
      <div className="w-full">
        <Navbar />
        {/* Content */}
        <div>
          <p className="text-3xl font-bold text-center pt-10">
            Search Flicker
          </p>
          <p className="text-center pt-5">
            Use the search box to find a film script
          </p>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Flicker;
