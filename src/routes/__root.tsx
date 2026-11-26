import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import styles from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Melvyn Malherbe - Software Engineer" },
      {
        name: "description",
        content:
          "Melvyn Malherbe (Melvynx): développeur full-stack, entrepreneur et formateur, fondateur de Codelynx.dev.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Melvyn Malherbe",
          alternateName: "Melvynx",
          url: "https://melvynx.dev",
          image: "https://melvynx.dev/melvyn-704.webp",
          jobTitle: "Développeur full-stack et formateur",
          worksFor: {
            "@type": "Organization",
            name: "Codelynx",
            url: "https://codelynx.dev",
          },
          sameAs: [
            "https://codelynx.dev/melvyn-malherbe",
            "https://melvynx.com",
            "https://www.youtube.com/@melvynxdev",
            "https://github.com/Melvynx",
          ],
        }),
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-neutral-900 antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
