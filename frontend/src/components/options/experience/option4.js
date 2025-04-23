import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const Option4 = ({ experience = [], resumeURL = "#" }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const getValidHostname = (link) => {
    try {
      return new URL(link).hostname;
    } catch {
      return "Invalid URL";
    }
  };

  return (
    <div className="container mx-auto p-8 bg-[#f0f8f4] min-h-screen font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-800">Experience</h2>
        <p className="text-xl italic text-green-700 font-light font-serif tracking-wide mt-1">
          Career Timeline
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-300"></div>

        {/* Experience Cards */}
        {experience.length > 0 ? (
          experience.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-green-700 w-8 h-8 rounded-full z-10"></div>

              {/* Card */}
              <div
                className={`w-5/12 bg-white shadow-md p-6 rounded-lg transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "mr-8" : "ml-8"
                }`}
              >
                <div onClick={() => toggleCard(index)} className="cursor-pointer">
                  <h3 className="text-lg font-semibold">
                    {item.experience.position || "Position Unavailable"}
                    <span className="font-light"> • {item.experience.company}</span>
                  </h3>
                  <div className="text-sm text-gray-500 mb-2">
                    {`${item.experience.start || "N/A"} - ${
                      item.experience.end
                        ? item.experience.end
                        : item.experience.presentJob
                        ? "Present"
                        : "N/A"
                    }`}
                  </div>
                </div>

                {/* Expanded Details */}
                {openIndexes.includes(index) && (
                  <div className="mt-4 text-sm">
                    {/* Location & Link */}
                    <div className="flex items-center gap-4 text-gray-700 mb-3">
                      <HiOutlineLocationMarker className="text-green-500" size={20} />
                      <span>{item.experience.location || "Location Unavailable"}</span>

                      {item.experience.link && (
                        <a
                          href={item.experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-600 hover:text-green-800"
                        >
                          <FiLink size={18} />
                          <span>{getValidHostname(item.experience.link)}</span>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {item.experience.desc || "Description not available."}
                    </p>

                    {/* Icons */}
                    {item.experience.icons?.length > 0 && (
                      <div className="flex gap-3 mt-4">
                        {item.experience.icons.map((icon, i) => (
                          <img
                            key={i}
                            src={icon}
                            alt={`icon-${i}`}
                            className="w-10 h-10"
                          />
                        ))}
                      </div>
                    )}

                    {/* Company Logo */}
                    {item.experience.logo && (
                      <div className="mt-6">
                        <img
                          src={item.experience.logo}
                          alt={`${item.experience.company} Logo`}
                          className="w-36 mx-auto"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No experience data available.</p>
        )}
      </div>

      {/* Resume Link */}
      <div className="text-center mt-10">
        <a
          href={resumeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 font-medium hover:underline"
        >
          View full resume →
        </a>
      </div>
    </div>
  );
};

export default Option4;
