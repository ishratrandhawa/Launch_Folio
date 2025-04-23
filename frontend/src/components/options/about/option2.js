import React from 'react';
import HalfStar from "../../images/half_star.png";

const Option2 = ({ FirstName, LastName, Thubmnail, Keywords, Description, Address, URL }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen w-full absolute left-0 top-0 flex flex-col md:flex-row bg-neutral-900 text-white font-sans tracking-wide">
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-8 md:px-28 pt-28 md:pt-40 flex flex-col">
          <div className="text-[2.5rem] md:text-6xl leading-tight mb-4">
            <span className="block font-semibold uppercase text-white">{FirstName}</span>
            <span className="block font-semibold uppercase text-green-300">{LastName}</span>
          </div>

          <p className="text-lg md:text-xl font-light text-gray-300 mb-2 capitalize">
            {Keywords}
          </p>

          <p className="text-sm font-light text-gray-400 mb-4 capitalize">
            {Address}
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#touch" className="px-5 py-2 rounded-xl bg-gray-700 text-white hover:bg-green-700 transition">
              Contact
            </a>
            <a href={URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-neutral-900 transition">
              Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-center md:justify-start md:pl-16 relative">
          <img className="z-10 h-60 md:h-72 w-60 md:w-72 rounded-xl border border-green-300 shadow-lg object-cover" src={Thubmnail} alt={FirstName} />
          <div className="hidden md:block z-0 absolute top-[9.5rem] right-[13.6rem] h-72 w-72 rounded-xl bg-neutral-800"></div>
        </div>
      </div>

      {/* About Section */}
      <div className="absolute top-[100vh] left-0 w-full min-h-screen px-6 md:px-32 py-20 md:py-28 bg-neutral-900 text-white font-sans" id="about">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold text-green-200 mb-6">About</h2>
          <p className="text-xl font-light leading-relaxed text-gray-200">
            {Description}
          </p>
          <div className="hidden md:block absolute left-0 bottom-36 h-16 w-16">
            <img src={HalfStar} alt="decoration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option2;
