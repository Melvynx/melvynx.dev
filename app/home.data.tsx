interface Item {
  role: string;
  company: {
    text: string;
    url?: string;
  };
  date: string;
}

interface Project {
  name: {
    text: string;
    url: string;
  };
  description: string;
}

export const experiences: Item[] = [
  {
    role: "Full-Stack Online Trainer",
    company: { text: "Codelynx.dev", url: "https://codelynx.dev" },
    date: "2022 - now",
  },
  {
    role: "Full-stack Freelance",
    company: { text: "YuZu" },
    date: "2022",
  },
  {
    role: "Software Engineer",
    company: { text: "QoQa.ch", url: "https://qoqa.ch" },
    date: "2018 - 2022",
  },
];

export const projects: Project[] = [
  {
    name: { text: "Codeline.app", url: "https://codeline.app" },
    description: "Online developer courses LMS",
  },
  {
    name: { text: "Chat2Code", url: "https://chat2code.dev" },
    description: "AI-powered frontend code generation tool",
  },
  {
    name: { text: "QuizUp", url: "https://quizup.app" },
    description: "AI-powered quiz generation platform",
  },
  {
    name: { text: "BulkCorrector", url: "https://bulkcorrector" },
    description: "AI grammar correction tool for large texts",
  },
  {
    name: { text: "AskSchema", url: "https://askschema.com" },
    description: "Chat with your database easily",
  },
  {
    name: { text: "Lumail", url: "https://lumail.io" },
    description: "AI-Powered newsletter builder.",
  },
];
