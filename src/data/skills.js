import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and interactive user interfaces.",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    description: "Developing scalable APIs and server-side applications.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaNodeJs },
    ],
  },
  {
    title: "Database",
    description: "Working with data modeling and database management.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Others",
    description: "Tools I use to build, test and manage projects.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const marqueeSkills = [
  "MongoDB",
  "Express.js",
  "Angular",
  "Node.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "Git",
  "GitHub",
  "Docker",
];