import React from 'react';

const NavbarDesign1 = ({
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
}) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full flex justify-center font-sans tracking-wide">
      <div className="w-full md:w-2/3 flex justify-between items-center mt-4 mx-4 md:mx-8 rounded-xl px-4 py-3 text-sm md:text-lg text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg backdrop-blur-md border border-blue-600/50">

        <a href="#about" className="mx-2 md:mx-4">
          <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">About</li>
        </a>
        {isExperienceEnabled && (
          <a href="#experience" className="mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Experience</li>
          </a>
        )}
        {isEducationEnabled && (
          <a href="#education" className="hidden md:block mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Education</li>
          </a>
        )}
        {isSkillEnabled && (
          <a href="#skills" className="hidden md:block mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Skills</li>
          </a>
        )}
        {isInterestEnabled && (
          <a href="#interests" className="hidden md:block mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Interests</li>
          </a>
        )}
        {isAwardsEnabled && (
          <a href="#awards" className="hidden md:block mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Awards</li>
          </a>
        )}
        {isProjectEnabled && (
          <a href="#projects" className="mx-2 md:mx-4">
            <li className="inline-block text-center hover:text-blue-300 hover:scale-[1.05] transition-all">Projects</li>
          </a>
        )}
        <a href="#touch" className="mx-2 md:mx-4">
          <li className="inline-block text-center hover:scale-[1.05] transition-all border border-blue-300 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-300 hover:text-blue-900">Get In Touch</li>
        </a>
      </div>
    </div>
  );
};

export default NavbarDesign1;
