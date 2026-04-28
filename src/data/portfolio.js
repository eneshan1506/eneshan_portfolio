export const personalInfo = {
  name: "Enes HAN",
  title: "Full-Stack Entwickler",
  description:
    "Ich entwickle moderne und benutzerfreundliche Webanwendungen. Ich arbeite mit React, Next.js und TypeScript.",
  avatar: "👨‍💻",
  email: "eneshan0646@gmail.com",
//   phone: "+49 555 123 4567",
  location: "Deutschland",
};

export const socialLinks = {
  github: "https://github.com/eneshan1506",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const about = {
  bio: [
    "Ich bin Enes HAN, ein leidenschaftlicher Full-Stack Entwickler mit Schwerpunkt auf modernen Webtechnologien. Mit umfangreicher Erfahrung in React, Next.js und TypeScript entwickle ich benutzerfreundliche und leistungsstarke Webanwendungen. Darueber hinaus habe ich Apps fuer Shopify entwickelt und dabei an individuellen E-Commerce-Loesungen gearbeitet.",
  ],
};

export const skills = [
  { name: "HTML", level: "100%", icon: "FaHtml5" },
  { name: "CSS", level: "100%", icon: "FaCss3Alt" },
  { name: "Cypress", level: "90%", icon: "SiCypress" },
  { name: "GitHub", level: "92%", icon: "FaGitAlt" },
  { name: "Shopify", level: "88%", icon: "FaShopify" },
  { name: "React", level: "95%", icon: "FaReact" },
  { name: "Next.js", level: "97%", icon: "SiNextdotjs" },
  { name: "Node.js", level: "Loading...", icon: "FaNodeJs" },
  { name: "TypeScript", level: "89%", icon: "SiTypescript" },
  { name: "Tailwind", level: "90%", icon: "SiTailwindcss" },
];

export const projects = [
  {
    id: 1,
    title: "Todo-App With TS",
    description:
      "Eine moderne Aufgabenverwaltung mit TypeScript, klarer Benutzeroberflaeche und einer schnellen, reaktiven Nutzererfahrung.",
    tags: ["React", "TypeScript", "Vercel"],
    demoUrl: "https://todo-app-ts-inky.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/todo-app-ts",
  },
  {
    id: 2,
    title: "Calculator-App",
    description:
      "Eine kompakte Rechner-App fuer alltaegliche Berechnungen mit fokusierter Bedienung und sauberem Interface.",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://calculator-app-topaz-pi-54.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/calculator-app",
  },
  {
    id: 3,
    title: "Weather-App",
    description:
      "Eine Wetter-App, die aktuelle Wetterdaten uebersichtlich darstellt und wichtige Informationen schnell zugreifbar macht.",
    tags: ["React", "API", "Tailwind CSS"],
    demoUrl: "https://weather-app-topaz-ten-24.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/weather-app",
  },
  {
    id: 4,
    title: "Guess App",
    description:
      "Eine Besucherkommentar-App mit Next.js, TypeScript und Blob Storage zum Speichern und Verwalten von Nachrichten.",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://guess-app-coral.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/guess-app",
  },
    {
    id: 5,
    title: "Period Tracker App",
    description:
      " Eine Perioden-Tracker-App, die Frauen dabei unterstuetzt, ihre Menstruationszyklen zu verfolgen und wichtige Informationen zu erhalten.",
    tags: ["Next.js", "TypeScript", "Blob Storage"],
    demoUrl: "https://period-tracker-plum.vercel.app/",
    codeUrl: "https://github.com/eneshan1506/period_tracker.git",
  },
];

export const contactInfo = [
  {
    icon: "IoMail",
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: "IoCall",
    label: "Telefon",
    value: personalInfo.phone,
  },
  {
    icon: "IoLocation",
    label: "Konum",
    value: personalInfo.location,
  },
];
