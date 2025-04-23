import React from 'react';

const Option4 = ({ educationTitle, education }) => {
  return (
    <section
      className="w-full min-h-screen flex justify-center items-start py-20 px-4 bg-neutral-900 text-neutral-100 font-sans"
      id="education"
    >
      <div className="relative w-full max-w-3xl border border-purple-300/40 rounded-2xl p-6 bg-neutral-800/60 shadow-md">

        {/* Floating Section Header */}
        <div className="absolute -top-5 left-6 bg-purple-100 text-purple-800 text-lg px-4 py-1 rounded-full shadow-sm font-medium tracking-wide">
          {educationTitle}
        </div>

        {/* Education List */}
        <div className="mt-8 flex flex-col gap-4">
          {education && education.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900/80 border border-purple-200/30 rounded-xl p-4 text-sm tracking-wide"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="font-semibold text-purple-100">🎓 {item.education.university}</div>
                <div className="text-purple-300 font-medium">CGPA: {item.education.gpa}</div>
              </div>

              <div className="pl-2 text-neutral-200">
                - {item.education.degree}, {item.education.branch}
              </div>

              <div className="pl-2 text-neutral-400 text-xs mt-1">
                {`${item.education.start} - ${item.education.end ? item.education.end : item.education.presentJob ? 'Present' : ''}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option4;
