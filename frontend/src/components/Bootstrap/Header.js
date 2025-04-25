import React from "react";
import img5 from '.././images/portfolio_logo.png';

const Header = () => {
  return (
    <div className="w-full z-10 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-3 md:py-5 flex items-center justify-between px-4 shadow-md">
      <div className="flex items-center">
        <img className="h-9 md:h-11 w-9 md:w-11 mr-3" src={img5} alt="logo" />
        <div className="flex flex-col leading-tight">
          <span className="text-xl md:text-3xl font-bold tracking-wide">Launch Folio</span>
          <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-300">Click. Create. Conquer.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
