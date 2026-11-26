export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  platform: string;
  site?: string;
  download: string;
  source?: string;
  /** The icon art fills its square (no macOS padding), so it is drawn smaller. */
  fullBleedIcon?: boolean;
}

/** Mac apps shown on /apps. Icons live in public/apps/<slug>.webp. */
export const apps: App[] = [
  {
    slug: "petitfichier",
    name: "PetitFichier",
    tagline: "Your files, smaller.",
    description:
      "Shrinks every screenshot, photo and video you copy or save, in a second, without changing how you work.",
    price: "Free",
    platform: "macOS 14+ · Apple silicon",
    site: "https://petitfichier.melvynx.dev",
    download: "https://petitfichier.melvynx.dev/download/PetitFichier.zip",
  },
  {
    slug: "present-pro",
    fullBleedIcon: true,
    name: "Present Pro",
    tagline: "Your screen, in tutorial mode.",
    description:
      "Draw on your screen, highlight the cursor, zoom, show your keys and your webcam while you record or present.",
    price: "Free during the beta",
    platform: "macOS 14+",
    site: "https://presentpro.melvynx.dev",
    download: "https://presentpro.melvynx.dev/download/PresentPro.zip",
  },
  {
    slug: "portly",
    name: "Portly",
    tagline: "One supervisor for every local server.",
    description:
      "Runs each dev server once, restarts it when it crashes, and gives every AI agent the same port, health and logs.",
    price: "Free · Open source",
    platform: "macOS 14+",
    site: "https://portly.melvynx.dev",
    download: "https://portly.melvynx.dev/download/Portly-macOS.zip",
    source: "https://github.com/Melvynx/portly",
  },
  {
    slug: "agent-burn",
    fullBleedIcon: true,
    name: "Agent Burn",
    tagline: "Your AI usage, in view.",
    description:
      "Tracks spend, subscription limits and daily usage for Claude, Codex, Cursor and more, from the menu bar or the CLI.",
    price: "Free · Open source",
    platform: "macOS 14+",
    site: "https://agent-burn.melvynx.dev",
    download: "https://agent-burn.melvynx.dev/download",
    source: "https://github.com/Melvynx/agent-burn",
  },
  {
    slug: "parler",
    name: "Parler",
    tagline: "Speak, and it types.",
    description:
      "Press a shortcut, talk, and your words appear in any text field. Transcription runs on your Mac, fully offline.",
    price: "Free · Open source",
    platform: "macOS",
    download: "https://github.com/Melvynx/Parler/releases/latest",
    source: "https://github.com/Melvynx/Parler",
  },
];
