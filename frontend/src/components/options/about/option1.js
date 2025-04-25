import React from 'react';
import flowerImage from "../../images/Vector.png";
import flowerImage2 from "../../images/Vector2.png";
import HalfStar from "../../images/half_star.png";

const Option1 = ({ FirstName, LastName, Thubmnail, Keywords, Description, URL }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b]">
      {/* Top Hero Section */}
      <div className="h-screen w-full relative overflow-hidden">
        {/* Background Elements */}
        <span className="absolute right-20 md:right-24 bottom-24 opacity-30">
          <img className="h-20 w-20" src={flowerImage2} alt="flower" />
        </span>
        <span className="absolute right-4 md:right-4 bottom-40 md:bottom-36 opacity-20">
          <img className="h-12 w-12" src={flowerImage2} alt="flower" />
        </span>

        {/* Main Intro */}
        <div className="absolute top-1/4 md:top-32 left-0 w-full px-6 md:px-32">
          <div className="text-3xl md:text-4xl font-light flex items-center gap-4 text-gray-300 tracking-wide">
            <span>Hi, I am</span>
            <img className="h-8 w-8" src={flowerImage} alt="decoration" />
          </div>

          <div className="text-[3.5rem] md:text-7xl font-bold uppercase text-white tracking-tight mt-4">
            <span>{FirstName} {LastName}</span>
          </div>

          <p className="text-xl font-light text-blue-200 mt-6 max-w-2xl">{Keywords}</p>

          <div className="mt-8 flex gap-4">
            <a href="#touch" className="px-6 py-2 bg-blue-800 text-white rounded-full shadow-md hover:bg-blue-700 transition">
              Contact
            </a>
            <a
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-gray-900 rounded-full shadow-md border border-white hover:bg-gray-200 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 pb-20" id="about">
        <div className="w-full md:w-1/2 max-w-xl text-white relative">
          <div className="text-4xl font-semibold mb-6 text-blue-100">About</div>
          <p className="text-lg font-light leading-relaxed text-gray-300 tracking-wide">
            {Description.slice(0, 500)}
          </p>
          <div className="absolute left-0 bottom-[-60px] opacity-30">
            <img src={HalfStar} alt="star" className="h-16 w-16 md:h-20 md:w-20" />
          </div>
        </div>

        {/* Thumbnail */}
        <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0">
          <div className="p-2 md:p-4 rounded-3xl border border-blue-500 bg-[#0f172a] shadow-xl">
            <img className="h-72 w-72 object-cover rounded-2xl" src={Thubmnail} alt={FirstName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option1;
