import React from 'react';

const Option1 = ({ experienceTitle, experience }) => {
  return (
    <section
      className="w-full min-h-screen bg-black text-neutral-200 font-sans"
      id="experience"
    >
      <div className="w-full px-6 md:px-32 pt-24">
        {/* Section Intro */}
        <div className="mb-2 text-lg text-purple-300 tracking-wide uppercase">
          Work history
        </div>

        <h2 className="text-4xl font-semibold mb-10 text-white">{experienceTitle}</h2>

        {/* Experience Cards */}
        <div className="w-full flex flex-wrap justify-start gap-6">
          {experience && experience.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-72 p-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-md"
            >
              <div className="flex flex-col items-center">
                <img
                  src={
                    index % 2 === 0
                      ? 'https://economictimes.indiatimes.com/thumb/msid-69278826,width-1200,height-900,resizemode-4,imgsize-82628/internship2-getty.jpg?from=mdr'
                      : 'https://thumbs.dreamstime.com/b/internship-businessman-work-white-broad-top-view-71223508.jpg'
                  }
                  className="h-14 w-14 object-cover rounded-full mb-3"
                  alt="experience-logo"
                />

                <div className="text-base font-semibold text-center text-purple-200 capitalize">
                  {item.experience.company}
                </div>

                <div className="text-sm text-purple-400 capitalize text-center mb-1">
                  {item.experience.position}
                </div>

                <div className="text-sm text-neutral-300 text-center mb-3">
                  {item.experience.desc.slice(0, 300)}
                </div>
              </div>

              <div className="text-xs text-center text-neutral-500 mt-auto">
                {`${item.experience.start} - ${
                  item.experience.end || (item.experience.presentJob ? 'Present' : '')
                }`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option1;
