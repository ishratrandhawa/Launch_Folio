import React from 'react';
import flowerImage from "../../images/Vector.png";
import flowerImage2 from "../../images/Vector2.png";
import HalfStar from "../../images/half_star.png";

const Option1 = ({ FirstName, LastName, Thubmnail, Keywords, Description, URL }) => {
  return (
    <div>
      <div className="h-screen w-full absolute left-0 top-0 bg-black">
        <span className="absolute right-20 md:right-24 bottom-24">
          <img className="h-20 w-20" src={flowerImage2} alt="flower" />
        </span>
        <span className="absolute right-4 md:right-4 bottom-40 md:bottom-36">
          <img className="h-12 w-12" src={flowerImage2} alt="flower" />
        </span>

        <div className="h-[100vh] absolute top-48 md:top-40 left-0 w-full pl-4 md:pl-32">
          <div className="text-4xl font-light flex gap-3 my-2 items-center text-[rgba(255,247,233,0.6)] tracking-wide">
            <span>Hi, I am</span>
            <img className="h-9 w-9" src={flowerImage} alt="decoration" />
          </div>

          <div className="text-[4rem] md:text-8xl mt-2 flex flex-col md:flex-row gap-4 text-[rgba(255,247,233,1)] font-bold uppercase tracking-tight">
            <span>{FirstName}</span>
            <span>{LastName}</span>
          </div>

          <p className="text-end text-xl font-light capitalize pt-8 md:mr-32 text-[rgba(255,247,233,0.6)]">
            {Keywords}
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#touch" className="px-5 py-2 rounded-xl bg-neutral-800 text-white hover:opacity-90 transition">Contact</a>
            <a href={URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl border border-white text-black bg-white hover:bg-gray-100 transition">Resume</a>
          </div>
        </div>
      </div>

      <div className="absolute top-[100vh] bg-black w-full text-xl min-h-screen p-6 md:p-20 flex flex-col md:flex-row" id="about">
        <div className="w-full md:w-1/2 pt-16 md:pt-20 px-4 md:px-12">
          <div className="mb-4 text-3xl font-semibold text-[rgba(255,247,233,1)]">About</div>
          <div className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-[rgba(255,247,233,0.9)]">
            {Description.slice(0, 500)}
          </div>
          <div className="absolute left-0 bottom-60 md:bottom-36 h-16 md:h-20 w-16 md:w-20">
            <img src={HalfStar} alt="star" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
          <div className="p-2 md:p-4 rounded-2xl border border-green-400 shadow-lg bg-neutral-900">
            <img className="h-72 w-72 object-cover rounded-xl" src={Thubmnail} alt={FirstName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option1;
