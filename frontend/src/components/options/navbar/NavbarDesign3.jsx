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
      <div className="w-full md:w-[68%] flex justify-between items-center mt-4 mx-4 md:mx-8 font-medium rounded-full px-4 py-3 text-sm text-white bg-[rgba(18,18,18,0.8)] backdrop-blur-md shadow-md border border-gray-700">
        <a href="#about" className="mx-2 md:mx-3">
          <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">about</li>
        </a>
        {isExperienceEnabled && (
          <a href="#experience" className="mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">experience</li>
          </a>
        )}
        {isEducationEnabled && (
          <a href="#education" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">education</li>
          </a>
        )}
        {isSkillEnabled && (
          <a href="#skills" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">skills</li>
          </a>
        )}
        {isInterestEnabled && (
          <a href="#interests" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">interests</li>
          </a>
        )}
        {isAwardsEnabled && (
          <a href="#awards" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">awards</li>
          </a>
        )}
        {isProjectEnabled && (
          <a href="#projects" className="mx-2 md:mx-3">
            <li className="inline-block text-center hover:text-green-300 hover:scale-[1.05] transition-all duration-200">projects</li>
          </a>
        )}
        <a href="#touch" className="mx-2 md:mx-3">
          <li className="inline-block text-center hover:scale-[1.05] transition-all duration-200 border border-purple-400 text-purple-400 px-3 py-1 rounded-full">get in touch</li>
        </a>
      </div>
    </div>
  );
};

export default NavbarDesign1;
