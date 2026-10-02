interface Item {
  role: string;
  company: {
    text: string;
    url?: string;
  };
  date: string;
  description: string;
}

interface Project {
  name: {
    text: string;
    url: string;
  };
  description: string;
}

interface SocialLink {
  text: string;
  url: string;
}

export const experiences: Item[] = [
  {
    role: "Founder & Full-Stack Instructor",
    company: { text: "Codelynx.dev", url: "https://codelynx.dev" },
    date: "2022 - now",
    description:
      "Building coding courses, a developer community and the products behind them.",
  },
  {
    role: "Course Creator",
    company: { text: "Codeline.app", url: "https://codeline.app" },
    date: "2021 - now",
    description:
      "Creating practical courses that have helped thousands of developers learn to code.",
  },
  {
    role: "Full-stack Freelance",
    company: { text: "YuZu" },
    date: "2022",
    description: "Built mobile and backend features for a consumer application.",
  },
  {
    role: "Software Engineer",
    company: { text: "QoQa.ch", url: "https://qoqa.ch" },
    date: "2018 - 2022",
    description:
      "Worked across React interfaces, Ruby services and mobile applications.",
  },
];

export const projects: Project[] = [
  {
    name: { text: "Pentest", url: "https://pentest.melvynx.dev" },
    description: "Pentest for your apps.",
  },
  {
    name: { text: "Portly", url: "https://portly.melvynx.dev" },
    description: "Port manager for macOS.",
  },
  {
    name: { text: "Tchao", url: "https://tchao.app" },
    description: "Human-controlled AI chat for small teams.",
  },
  {
    name: { text: "Codeline.app", url: "https://codeline.app" },
    description: "Online developer courses LMS.",
  },
  {
    name: { text: "Chat2Code", url: "https://chat2code.dev" },
    description: "AI-powered frontend code generation tool.",
  },
  {
    name: { text: "QuizUp", url: "https://quizup.app" },
    description: "AI-powered quiz generation platform.",
  },
  {
    name: { text: "BulkCorrector", url: "https://bulkcorrector" },
    description: "AI grammar correction tool for large texts.",
  },
  {
    name: { text: "AskSchema", url: "https://askschema.com" },
    description: "Chat with your database easily.",
  },
  {
    name: {
      text: "Lumail.io",
      url: "https://lumail.io?ref=melvynx",
    },
    description: "AI-Powered newsletter builder.",
  },
  {
    name: { text: "SaveIt.now", url: "https://saveit.now" },
    description: "AI bookmark manager that finds content by vibes.",
  },
  {
    name: { text: "SpyLand.ing", url: "https://spyland.ing" },
    description: "Daily competitor landing page monitoring with AI insights.",
  },
  {
    name: { text: "Thumbfa.st", url: "https://thumbfa.st" },
    description: "AI-powered YouTube thumbnail generator.",
  },
];

export const socials: SocialLink[] = [
  { text: "X", url: "https://mlv.sh/twitter" },
  { text: "LinkedIn", url: "https://mlv.sh/linkedin" },
  { text: "GitHub", url: "https://mlv.sh/github" },
  { text: "YouTube", url: "https://mlv.sh/youtube" },
  { text: "Blog", url: "https://codelynx.dev/posts" },
  { text: "Melvynx.com", url: "https://melvynx.com" },
];
