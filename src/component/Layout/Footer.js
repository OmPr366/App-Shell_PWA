import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen shadow-md flex justify-between border-t-2 bg-slate-50">
        
      <div className="w-full text-center py-2 cursor-pointer "><Link to={"/flicker"} >Flicker Search</Link></div>
      
      <div className="w-full text-center py-2 cursor-pointer "><Link to={"/script"} >Script Search</Link></div>
      
    </div>
  );
};

export default Footer;
