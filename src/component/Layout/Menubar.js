import React from "react";

const searchTerms = ["Ivan Aivazovsky", "Henry Pether", "Robin Jacques"];

const Menubar = ({}) => {

  
  return (
    <div className=" w-48  bg-gray-300 h-screen px-2 ">
      {/* <p className='text-lg text-center pt-10 font-bold ' >
            Use the search box to find a film script
        </p> */}
      <p className="pt-5 text-xl font-bold ">Search </p>

        {/* All Search terms */}
      <div className="w-full px-2 mt-7 ">
        {searchTerms.map((term, index) => (
          <button
            key={index}
            className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded my-3 w-full"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menubar;
