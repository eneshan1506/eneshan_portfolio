import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaShopify } from "react-icons/fa";
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
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  // {
  //   skill_name: "PostgreSQL",
  //   image: "postgresql.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
];

// export const FULLSTACK_SKILL = [
//   {
//     skill_name: "Docker",
//     image: "docker.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "Figma",
//     image: "figma.png",
//     width: 50,
//     height: 50,
//   },
// ];

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
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://twitter.com",
  // },
];

export const PROJECTS = [
  {
    title: "Todo-App With TS",
    description:
      "Eine moderne Aufgabenverwaltung mit TypeScript, klarer Benutzeroberflaeche und einer schnellen, reaktiven Nutzererfahrung.",
    tags: ["React", "TypeScript", "Vercel"],
    demoUrl: "https://todo-app-ts-inky.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/todo-app-ts",
  },
  {
    title: "Calculator-App",
    description:
      "Eine kompakte Rechner-App fuer alltaegliche Berechnungen mit fokusierter Bedienung und sauberem Interface.",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://calculator-app-topaz-pi-54.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/calculator-app",
  },
  {
    title: "Weather-App",
    description:
      "Eine Wetter-App, die aktuelle Wetterdaten uebersichtlich darstellt und wichtige Informationen schnell zugreifbar macht.",
    tags: ["React", "API", "Tailwind CSS"],
    demoUrl: "https://weather-app-topaz-ten-24.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/weather-app",
  },
  {
    title: "Guess App",
    description:
      "Eine Besucherkommentar-App mit Next.js, TypeScript und Blob Storage zum Speichern und Verwalten von Nachrichten.",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://guess-app-coral.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/guess-app",
  },
  {
    title: "Period Tracker App",
    description:
      "Eine Perioden-Tracker-App, die Frauen dabei unterstuetzt, ihre Menstruationszyklen zu verfolgen und wichtige Informationen zu erhalten.",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://period-tracker-plum.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/period_tracker.git",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/eneshan1506",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/enes-han-a955373bb/",
      },
    ],
  },
  {
    title: "Kontakt",
    data: [
      {
        name: "E-Mail",
        icon: IoMail,
        link: "mailto:eneshan0646@gmail.com",
      },
    ],
  },
];

export const NAV_LINKS = [
  {
    title: "Über mich",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projekte",
    link: "#projects",
  },
];

export const LINKS = {
  sourceCode: "https://github.com/eneshan1506",
};
