import React from 'react';
import HalfStar from "../../images/half_star.png";
import flowerImage from "../../images/Vector2.png"; 

const Option4 = ({ FirstName, LastName, Thubmnail, Keywords, Description, Address, URL }) => {
  return (
    <div className="font-sans text-gray-100">
      {/* Header Section */}
      <div className="bg-neutral-800 h-screen w-full absolute left-0 top-0 flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 px-8 md:px-28 pt-28 md:pt-36 flex flex-col">
          <p className="text-sm font-medium capitalize w-fit px-4 py-2 mb-4 rounded-full bg-purple-100 text-purple-900 tracking-wide">
            {Address}
          </p>

          <div className="text-[2.5rem] md:text-6xl leading-tight mb-4 font-extrabold text-white uppercase">
            <span>{FirstName}</span>
            <span className="text-purple-300">{LastName}</span>
          </div>

          <p className="text-sm md:text-lg font-medium bg-purple-100 text-purple-900 px-4 py-2 rounded-full w-fit tracking-wide mb-6">
            {Keywords}
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#touch"
              className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition"
            >
              Contact
            </a>
            <a
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-neutral-900 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-24 relative">
          <div className="relative p-4 border border-purple-300 rounded-2xl shadow-xl bg-neutral-900">
            <img
              className="h-64 md:h-80 w-64 md:w-80 rounded-2xl object-cover"
              src={Thubmnail}
              alt={FirstName}
            />
            <img
              src={flowerImage}
              alt="flower"
              className="absolute -top-8 -left-8 h-14 w-14 md:h-20 md:w-20"
            />
            <img
              src={flowerImage}
              alt="flower"
              className="absolute -bottom-8 -right-8 h-12 w-12 md:h-16 md:w-16"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="absolute top-[100vh] left-0 w-full min-h-screen px-6 md:px-32 py-20 md:py-28 bg-neutral-900 text-white"
        id="about"
      >
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold mb-6 text-purple-300">About</h2>
          <p className="text-base md:text-lg leading-relaxed font-light text-gray-200">
            {Description.slice(0, 500)}
          </p>
          <div className="absolute left-0 bottom-36 h-16 w-16">
            <img src={HalfStar} alt="decoration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option4;
