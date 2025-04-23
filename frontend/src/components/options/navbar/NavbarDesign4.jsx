import React from 'react';

const NavbarDesign1 = ({
  isExperienceEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
}) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full flex justify-center font-sans tracking-wider">
      <div className="w-full flex justify-between items-center px-4 py-3 text-sm text-white bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 shadow-md rounded-sm">
        
        <a href="#about" className="mx-2 md:mx-3">
          <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">about</li>
        </a>
        {isExperienceEnabled && (
          <a href="#experience" className="mx-2 md:mx-3">
            <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">experience</li>
          </a>
        )}
        <a href="#education" className="mx-2 md:mx-3">
          <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">education</li>
        </a>
        {isSkillEnabled && (
          <a href="#skills" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">skills</li>
          </a>
        )}
        {isInterestEnabled && (
          <a href="#interests" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">interests</li>
          </a>
        )}
        {isAwardsEnabled && (
          <a href="#awards" className="hidden md:block mx-2 md:mx-3">
            <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">awards</li>
          </a>
        )}
        {isProjectEnabled && (
          <a href="#projects" className="mx-2 md:mx-3">
            <li className="inline-block hover:text-blue-100 text-center hover:scale-[1.05] transition-all">projects</li>
          </a>
        )}
        <a href="#touch" className="mx-2 md:mx-3">
          <li className="inline-block text-center px-3 py-1 border border-blue-100 rounded-full text-blue-100 hover:bg-blue-100 hover:text-blue-900 transition-all">get in touch</li>
        </a>
      </div>
    </div>
  );
};

export default NavbarDesign1;
