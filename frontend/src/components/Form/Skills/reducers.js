import {REMOVE_SKILL,SELECT_SKILL} from "./actions";


let availableSkills = [
    {
      name: "Problem-solving",
      image: "problem_solving.png",
      url: "https://s3-ap-south-1.amazonaws.com/internshala-blog/wp-content/uploads/2023/10/What-are-Problem-Solving-Skills.jpg" // Placeholder URL
    },
    {
      name: "C/C++",
      image: "c_cpp.png",
      url: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"
    },
    {
      name: "Python",
      image: "python.png",
      url: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
    },
    {
      name: "Java",
      image: "java.png",
      url: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png"
    },
    {
      name: "JavaScript",
      image: "javascript.png",
      url: "https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc"
    },
    {
      name: "Next.js",
      image: "next.png",
      url: "https://miro.medium.com/v2/resize:fit:1400/0*9ToWmeRH2_mgrDss"
    },
    {
      name: "HTML",
      image: "html.png",
      url: "https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle.png"
    },
    {
      name: "Node.js",
      image: "node.png",
      url: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
    },
    {
      name: "CSS",
      image: "css.png",
      url: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png"
    },
    {
      name: "React.js",
      image: "react.png",
      url: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
    },
    {
      name: "django",
      image: "django.png",
      url: "https://miro.medium.com/v2/resize:fit:1400/1*HVKOLLX7wprRbHTl2IPDcQ.png"
    },
    {
      name: "Data Structures",
      image: "data_structures.png",
      url: "https://yt3.googleusercontent.com/h0n8phylgeZKuMlGmcPhkOM8rkV1IHTr5oumqZL581iQCSeMeFrnmYB69a69RQAQoVqgxM5ENX8=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Object-Oriented Programming (OOP)",
      image: "oop.png",
      url: "https://www.masaischool.com/blog/content/images/2023/03/Object-oriented-programming-blog.png"
    },
    {
      name: "Software Development",
      image: "software_development.png",
      url: "https://static.vecteezy.com/system/resources/thumbnails/003/573/245/small/computer-repair-logo-template-software-development-design-desktop-service-vector.jpg"
    },
    {
      name: "Linux",
      image: "Linux.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"
    },
    {
      name: "MySQL",
      image: "Mysql.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
    },
    {
      name: "Artificial Intelligence (AI)",
      image: "ai.png",
      url: "https://www.srimax.com/wp-content/uploads/2020/01/Importance-of-Artificial-Intelligence.jpeg"
    },
    {
      name: "Machine Learning (ML)",
      image: "machine_learning.png",
      url: "https://www.freecodecamp.org/news/content/images/2022/08/A6125B75-DB79-4448-94C9-E6ABD3E0E3E9.jpeg"
    },
    {
      name: "Matlab",
      image: "Matlab.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png"
    },
    {
      name: "3D Modeling",
      image: "3d_modeling.png",
      url: "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL_3D_Modelling_Blog_Header_1500x750.jpg.optimal.jpg"
    },
    {
      name: "Product Design",
      image: "product_design.png",
      url: "https://www.raymont-osman.com/content/images/2023/07/Product-Design-Development-Process-Banner.webp"
    },
    {
      name: "Figma",
      image: "Figma.png",
      url: "https://media.licdn.com/dms/image/v2/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=h6MzVUlztZY6PUfNM-iBl_H9ne7K_pqsnn4vJFKmdjU"
    }
  ];


const initialState = {
  availableSkills: [...availableSkills], // Initialize with all available skills
  selectedSkills: [],
  skills:[]
};

const skills = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_SKILL: {
      const { skill } = payload;
  
      const updatedAvailableSkills = state.availableSkills.filter((s) => s.name !== skill.name);
      const updatedSelectedSkills = [...state.selectedSkills, skill];
      return {
        ...state,
        availableSkills: updatedAvailableSkills,
        selectedSkills: updatedSelectedSkills,
      };
    }
    
      case REMOVE_SKILL: {
        const { skill } = payload;
        return {
          ...state,
          availableSkills: [...state.availableSkills, skill],
          selectedSkills: state.selectedSkills.filter((s) => s.name !== skill.name), // Compare by the 'name' property
        };
      }
    default:
      return state;
  }
};

export default skills;
