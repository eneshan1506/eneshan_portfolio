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
    link: "https://www.linkedin.com/in/eneshan/",
  },
];

export const PROJECTS = [
  {
    descriptionKey: "lagerxPro",
    title: "LagerX Pro",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "TanStack Query"],
    demoUrl: "https://handyreparatur.hanenes.com/admin/login",
    image: "/projects/lagerx-pro-cover.webp",
  },
  {
    descriptionKey: "dtzB1Meister",
    title: "DTZ B1 Meister",
    tags: ["PWA", "JavaScript", "Gemini AI", "Supabase"],
    demoUrl: "https://dtzb1.hanenes.com/",
    image: "/projects/dtz-b1-meister.webp",
  },
  {
    descriptionKey: "hanHandyService",
    title: "HAN Handy Service",
    tags: ["React", "TypeScript", "Express", "Prisma", "Neon"],
    demoUrl: "https://handyreparatur.hanenes.com/",
    image: "/projects/han-handy-service.webp",
  },
  {
    descriptionKey: "edeHome",
    title: "Ede Home",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    demoUrl: "https://ede-home.vercel.app/",
    image: "/projects/ede-home.webp",
  },
  {
    descriptionKey: "hanmarktApp",
    title: "HanMarkt",
    tags: ["Next.js", "Tailwind CSS", "Market App"],
    demoUrl: "https://hanmarkt.hanenes.com/",
    image: "/projects/hanmarkt.webp",
  },
  {
    descriptionKey: "periodTrackerApp",
    title: "Period Tracker App",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://cycle.hanenes.com/",
    image: "/projects/period-tracker.webp",
  },
  {
    descriptionKey: "medikamenteApp",
    title: "Medikamenten-Tracker App",
    tags: ["Next.js", "TypeScript", "NeonDB", "Vercel", "Cron Jobs"],
    demoUrl: "https://medikamente.hanenes.com/",
    image: "/projects/medikamente.webp",
  },
  {
    descriptionKey: "handonerApp",
    title: "HanDoner",
    tags: ["Next.js", "Tailwind CSS", "Restaurant Website"],
    demoUrl: "https://handoner.hanenes.com/",
    image: "/projects/handoner.webp",
  },
  {
    descriptionKey: "todoApp",
    title: "Todo-App With TS",
    tags: ["React", "TypeScript", "Vercel"],
    demoUrl: "https://todo-app-ts-inky.vercel.app/",
    image: "/projects/todo-app.webp",
  },
  {
    descriptionKey: "guessApp",
    title: "Guess App",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://guess-app-coral.vercel.app/",
    image: "/projects/guess-app.webp",
  },
];

export const SITE_LEGAL = {
  name: "Enes HAN",
  city: "Deutschland",
  email: "contact@hanenes.com",
  website: "https://hanenes.com",
};

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
        link: "https://www.linkedin.com/in/eneshan/",
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
