import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { IoMail } from "react-icons/io5";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/eneshan1506",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/enes-han-a955373bb/",
  },
];

export const PROJECTS = [
   {
    descriptionKey: "periodTrackerApp",
    title: "Period Tracker App",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://cycle.hanenes.com/",
    codeUrl: "https://github.com/eneshan1506/period_tracker.git",
  },
  {
    descriptionKey: "todoApp",
    title: "Todo-App With TS",
    tags: ["React", "TypeScript", "Vercel"],
    demoUrl: "https://todo-app-ts-inky.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/todo-app-ts",
  },
  {
    descriptionKey: "calculatorApp",
    title: "Calculator-App",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://calculator-app-topaz-pi-54.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/calculator-app",
  },
  {
    descriptionKey: "weatherApp",
    title: "Weather-App",
    tags: ["React", "API", "Tailwind CSS"],
    demoUrl: "https://weather-app-topaz-ten-24.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/weather-app",
  },
  {
    descriptionKey: "guessApp",
    title: "Guess App",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://guess-app-coral.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/guess-app",
  },
 
];

export const FOOTER_DATA = [
  {
    titleKey: "community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/eneshan1506",
      },
    ],
  },
  {
    titleKey: "socialMedia",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/enes-han-a955373bb/",
      },
    ],
  },
  {
    titleKey: "contact",
    data: [
      {
        name: "E-Mail",
        icon: IoMail,
        link: "mailto:contact@hanenes.com",
      },
    ],
  },
];
