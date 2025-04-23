import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const Option3 = ({ experience }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
    <div className="w-full min-h-screen bg-neutral-100 font-sans px-4 py-20" id="experience">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-1">Experience</h2>
        <p className="text-xl italic text-blue-700 font-light font-serif tracking-wide">
          My journey so far
        </p>
      </div>

      {/* Experience Cards */}
      {experience &&
        experience.map((item, index) => (
          <div
            key={index}
            className="mx-auto mt-10 w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-500"
          >
            {/* Collapsed Header */}
            <div
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50 hover:bg-blue-100"
              onClick={() => toggleCard(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                <span>{item.experience.position || "Position"}</span>
                <span className="font-light"> • {item.experience.company}</span>
              </h3>

              <div className="flex items-center gap-3 text-gray-600 text-lg">
                {`${item.experience.start} - ${
                  item.experience.end
                    ? item.experience.end
                    : item.experience.presentJob
                    ? "Present"
                    : "N/A"
                }`}
                <span
                  className={`text-2xl transform transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-45" : ""
                  }`}
                >
                  {openIndexes.includes(index) ? "×" : "+"}
                </span>
              </div>
            </div>

            {/* Expanded Content */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndexes.includes(index) ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-6 bg-blue-900 text-white">
                {/* Location & Link */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <HiOutlineLocationMarker className="text-blue-300" size={20} />
                  <span>{item.experience.location || "Location Unavailable"}</span>

                  {item.experience.link && (
                    <a
                      href={item.experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-300 hover:text-blue-400"
                    >
                      <FiLink size={18} />
                      <span>{getValidHostname(item.experience.link)}</span>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="leading-relaxed mb-6 max-w-2xl">
                  {item.experience.desc || "Description not available."}
                </p>

                {/* Icons & Logo */}
                <div className="flex justify-between items-end">
                  {/* Icons */}
                  <div className="flex gap-3">
                    {item.experience.icons?.map((icon, i) => (
                      <img key={i} src={icon} alt={`icon-${i}`} className="w-10 h-10" />
                    ))}
                  </div>

                  {/* Logo */}
                  {item.experience.logo && (
                    <div className="mix-blend-multiply">
                      <img
                        src={item.experience.logo}
                        alt={`${item.experience.company} Logo`}
                        className="w-28"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Option3;
