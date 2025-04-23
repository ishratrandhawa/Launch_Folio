import React from 'react';

const Option3 = ({ FirstName, LastName, Thubmnail, Keywords, Description, URL }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen w-full absolute left-0 top-0 bg-neutral-900">
        <div className="h-full w-full flex flex-col justify-center items-center px-4 text-white font-sans">
          <div className="text-[3.5rem] md:text-8xl text-center my-4 flex gap-4 leading-none font-bold uppercase tracking-tight">
            <span>{FirstName}</span>
            <span className="text-blue-300">{LastName}</span>
          </div>
          <p className="text-center text-xl md:text-2xl uppercase font-light text-blue-200 tracking-wider">
            {Keywords}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#touch"
              className="px-5 py-2 rounded-xl bg-blue-800 text-white hover:bg-blue-700 transition"
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
      </div>

      {/* About Section */}
      <div
        className="absolute top-[100vh] left-0 w-full bg-neutral-900 text-white font-sans min-h-screen p-6 md:p-20"
        id="about"
      >
        <div className="w-full flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/4 flex justify-center">
            <img
              className="h-40 md:h-48 w-40 md:w-48 object-cover rounded-full border border-blue-300 shadow-md"
              src={Thubmnail}
              alt={FirstName}
            />
          </div>

          <div className="md:w-3/4">
            <h2 className="text-4xl font-semibold mb-6 text-blue-200">About.</h2>
            <p className="text-base md:text-lg leading-relaxed font-light text-gray-200">
              {Description.slice(0, 500)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option3;
