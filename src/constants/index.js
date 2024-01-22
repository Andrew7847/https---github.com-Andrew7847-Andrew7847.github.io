import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    unreal,
    python,
    c_logo,
    bombshellspaces,
    pathfinding,
    threejs,
    rn,
    snhu,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Development Student",
      icon: mobile,
    },
    {
      title: "Cloud Technician",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: c_logo,
    },
    {
      name: "Unreal Engine",
      icon: unreal,
    }
  ];
  
  const experiences = [
    {
      title: "Application Administrator",
      company_name: "Rightworks",
      icon: rn,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Installed, updated, and supported over 1000 unique applications, ensuring high availability for clients.",
        "Maintained, and optimized over 1500 Microsoft SQL instances for client applications.",
        "Developed innovative automation scripts with PowerShell to improve efficiency and consistency.",
        "Acted as a liaison between vendors and clients to implement new applications and migrate data.",
        "Vetted new applications for the cloud environment by putting them through a rigorous testing process.",
        "Acted as tier 3 support to assist service technicians with complex end-user issues.",
      ],
    },
    {
      title: "Cloud Service Technician Level 2",
      company_name: "Rightworks",
      icon: rn,
      iconBg: "#383E56",
      date: "October 2022 - September 2023",
      points: [
        "Resolved over 150 end-user tickets monthly via chats and calls with an average QA score of 95%.",
        "Utilized Active Directory, Group Policy, and Domain Controllers to support end-users’ local networks.",
        "Supported hundreds of various user accounting applications in a private cloud environment.",
        "Performed basic network troubleshooting including printer configuration and performance tracking.",
        "Mentored new cloud service technicians on communication skills and optimal troubleshooting techniques.",
        "Pioneered a new chat support system which doubled the efficiency of chat support technicians.",
      ],
    },
    {
      title: "Bachelor's Degree - Game Programming and Development",
      company_name: "Southern New Hampshire University",
      icon: snhu,
      iconBg: "#0b3371",
      date: "May 2022 - Present",
      points: [
        "Maintained a GPA of 3.976 and made the Presidents List multiple times throughout my degree program",
        "Took courses focusing on proper version control techniques using Git and BitBucket",
        "Created multiple rapid prototype games based on shareholder requirements.",
      ],
    },
    {
      title: "Associate's Degree - Computer Science",
      company_name: "Southern New Hampshire University",
      icon: snhu,
      iconBg: "#0b3371",
      date: "August 2020 - April 2022",
      points: [
        "Graduated with Highest Honors - GPA: 3.986",
        "Took courses related to programming languages including Python, C++, and Java",
        "Completed course such as Operating Systems, Data Structures and Algorithms, and System Analysis and Design",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Interior Design Blog",
      description:
        "A blog site that I created for my wife to document her journey as an interior design student.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "orange-text-gradient",
        },
      ],
      image: bombshellspaces,
      source_code_link: "https://github.com/Andrew7847/BombshellSpaces-blog",
      site_link: "https://bombshellspaces.com",
    },
    {
      name: "A* Pathfinding Algorithm",
      description:
        "A visualization tool for the A* pathfinding algorithm.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: pathfinding,
      source_code_link: "https://github.com/Andrew7847/A-Star_Pathfinder",
      site_link: "https://github.com/Andrew7847/A-Star_Pathfinder",
    },
  ];
  
  export { services, technologies, experiences, projects };
