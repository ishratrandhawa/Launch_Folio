import React from 'react';

const Option1 = ({ experienceTitle, experience, URL }) => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen font-sans bg-[#e5e9f0] text-gray-800 py-20 px-6 md:px-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-2 text-gray-900 ml-2 md:ml-0">
          {experienceTitle}
        </h2>
        <p className="text-lg text-blue-700 ml-2 md:ml-0 font-medium mb-12">
          Career Highlights
        </p>

        {/* Experience Cards */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-12">
          {experience &&
            experience.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-64 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <div className="flex flex-col items-center">
                  {item.experience.url && (
                    <img
                      src={item.experience.url}
                      alt="experience-logo"
                      className="h-14 w-14 object-contain mb-3"
                    />
                  )}
                  <div className="text-base font-semibold text-center text-blue-800 capitalize">
                    {item.experience.company}
                  </div>
                  <div className="text-sm text-center text-gray-500 capitalize mb-1">
                    {item.experience.position}
                  </div>
                  <div className="text-xs text-center text-gray-400">
                    {`${item.experience.start} - ${
                      item.experience.end
                        ? item.experience.end
                        : item.experience.presentJob
                        ? 'Present'
                        : ''
                    }`}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Resume Button */}
        <div className="flex justify-center">
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-blue-800 text-blue-800 rounded-xl hover:bg-blue-800 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Option1;
