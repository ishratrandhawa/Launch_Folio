import React from 'react';

const Option1 = ({ educationTitle, education }) => {
  return (
    <section
      id="education"
      className="w-full min-h-screen bg-[#0f1f1a] text-white font-sans py-24 px-4 md:px-32"
    >
      {/* Section Title */}
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-green-200 font-serif">
          {educationTitle}
        </h1>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education &&
          education.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2d27] rounded-xl shadow-md p-6 border border-green-300/20"
            >
              <h2 className="text-2xl font-semibold text-green-100 mb-2">
                {item.education.university}
              </h2>
              <p className="text-lg text-green-200 mb-1">{item.education.degree}</p>
              <p className="text-sm text-green-300">CGPA: {item.education.gpa}</p>
              <p className="text-sm text-green-300 mb-2">{item.education.branch}</p>
              <p className="text-xs text-green-400">
                {`${item.education.start} - ${
                  item.education.end
                    ? item.education.end
                    : item.education.presentJob
                    ? "Present"
                    : ""
                }`}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Option1;
