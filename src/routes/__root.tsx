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
      { name: "description", content: "Software engineer and entrepreneur" },
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
