import FormGroup from "./Bootstrap/FormGroup";
import SocialMedia from "./Bootstrap/SocialMedia";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import ProjectList from "./Form/Projects/ProjectList";
import SkillsList from "./Form/Skills/SkillsList";
import { SectionTitle } from "./sectionTitle/sectionTitle";

const Form = ({ FormData, onChange, isExperienceEnabled, isEducationEnabled, isSkillEnabled, isInterestEnabled, isAwardsEnabled,
  isProjectEnabled, toggleProject, toggleExperience, toggleEducation, toggleSkill, toggleInterest, toggleAward }) => {
  const Desc = {
    FullName: ["text", "Full Name", "This is your full name. This has been generated using your first and last names."],
    FirstName: ["text", "First Name", "Please enter your first name."],
    LastName: ["text", "Last Name", "Please enter your last name"],
    Thubmnail: ["text", "Your Photo", "Please upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here."],
    URL: ["text", "Website / Resume Link", "Please enter the URL of your website, where this page is going to be hosted"],
    Keywords: ["text", "Keywords i.e. frontend developer", "If someone wants to search for you, what keywords should they use?"],
    Description: ["text", "About you", "Write something nice about you."],
    Address: ["text", "Location", "Type a city and state."],
    Phone: ["text", "Phone Number", "Please enter a phone number where you may be reached."],
    Email: ["text", "Email Address", "Type your primary email address"],
    Socials: {
      Instagram: ["text", "Instagram Username", "If you may like, enter your instagram @"],
      LinkedIn: ["text", "LinkedIn ID", "Enter your name on LinkedIn."],
      GitHub: ["text", "GitHub Username", "Enter your name on Github. "]
    }
  };

  const getBorderColor = (fd) => {
    if (FormData[fd].length !== 0 && fd !== "Colour") {
      return "border-cyan-400";
    }
    return "";
  };

  return (
    <div className="Form text-black bg-slate-100 p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 border-b border-cyan-400 pb-2">Basic Info</h1>
      {Object.keys(FormData).map((fd) =>
        fd !== "Socials" ? (
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              borderColor={getBorderColor(fd)}
            />
          )
        ) : (
          <SocialMedia
            MediaData={Desc[fd]}
            value={FormData[fd]}
            onChange={onChange}
          />
        )
      )}

      {[
        ["Experience", isExperienceEnabled, <ExperienceList />],
        ["Education", isEducationEnabled, <EducationList />],
        ["Skills", isSkillEnabled, <SkillsList />],
        ["Interests", isInterestEnabled, <InterestList />],
        ["Awards", isAwardsEnabled, <AwardList />],
        ["Projects", isProjectEnabled, <ProjectList />]
      ].map(([title, isEnabled, Component], idx) => (
        <div
          key={idx}
          className={`my-8 p-4 rounded-lg ${isEnabled ? "bg-white border border-cyan-300" : "bg-gray-200 text-gray-700"}`}
        >
          {isEnabled ? (
            <>
              <SectionTitle initialTitle={title} titleType={title.toLowerCase()} />
              {Component}
            </>
          ) : (
            <p>{title} section is disabled.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Form;
