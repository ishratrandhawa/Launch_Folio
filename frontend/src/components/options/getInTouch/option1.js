import React from "react";

const Option1 = ({ Address, Phone, Email, Socials }) => {
  const Meta = {
    Facebook: ["facebook-f", "https://fb.me/"],
    WhatsApp: ["whatsapp", "https://wa.me/"],
    Instagram: ["instagram", "https://instagr.am/"],
    Twitter: ["twitter", "https://twitter.com/"],
    LinkedIn: ["linkedin-in", "https://linkedin.com/in/"],
    GitHub: ["github", "https://github.com/"],
    StackOverflow: ["stack-overflow", "https://stackoverflow.com/u/"],
  };

  return (
    <section
      id="awards"
      className="w-full min-h-screen bg-[#e7f0fa] text-gray-800 font-sans py-24 px-6 md:px-32"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-800 font-serif">Get in Touch</h2>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm bg-white p-3 rounded-lg shadow-sm border border-blue-200">
            <span className="material-symbols-outlined text-blue-700">location_on</span>
            <span>{Address}</span>
          </div>

          <div className="text-base font-medium text-blue-900">{Phone}</div>

          <a
            className="text-blue-700 hover:underline text-base"
            href={`mailto:${Email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Email}
          </a>
        </div>

        {/* Right Section: Socials */}
        <div className="flex flex-wrap gap-4">
          {Object.keys(Socials)
            .filter((soc) => Socials[soc]?.length > 0)
            .map((soc) => (
              <a
                key={soc}
                href={`${Meta[soc][1]}${Socials[soc]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-3xl"
              >
                <i className={`fab fa-${Meta[soc][0]}`}></i>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Option1;
