import React from 'react';

const Option1 = (props) => {
  const { educationTitle, education } = props;

  return (
    <section className="w-full min-h-screen bg-black text-neutral-200 font-sans" id="education">
      <div className="w-full px-4 md:px-32 pt-12 md:pt-24">
        <h2 className="text-4xl font-semibold mb-8 md:mb-12 md:pl-24 text-white">
          {educationTitle}
        </h2>

        <div className="w-full flex flex-col gap-6 md:px-24">
          {education && education.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-[70vw] py-4 px-4 md:pl-8 rounded-lg border border-neutral-700 bg-neutral-900"
            >
              <div className="text-lg font-semibold capitalize mb-1">
                {item.education.university}
              </div>

              <div className="flex justify-between items-center text-sm text-neutral-300 mb-1 pl-1 md:pl-4">
                <div>- {item.education.degree}</div>
                <div>CGPA: {item.education.gpa}</div>
              </div>

              <div className="text-sm text-neutral-400 pl-1 md:pl-4">
                - {item.education.branch}
              </div>

              <div className="absolute top-0 right-0 p-2 text-xs text-neutral-400">
                {`${item.education.start} - ${item.education.end || (item.education.presentJob ? 'Present' : '')}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option1;
