import clsx from "clsx";
import { GeistPixelGrid } from "geist/font/pixel";
import { ConditionalLink } from "./components/ConditionalLink";
import { experiences, projects } from "./home.data";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 lg:pt-8 min-h-full flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1
          className={clsx(
            GeistPixelGrid.className,
            "text-2xl lg:text-6xl font-bold"
          )}
        >
          Melvyn Malherbe
        </h1>
        <p className="text-neutral-700">
          I'm a software engineer and entrepreneur. I'm the founder of{" "}
          <a
            href="https://codelynx.dev"
            className="text-blue-500 hover:underline"
          >
            Codelynx
          </a>
          , online coding courses and tutorials. I create content on{" "}
          <a
            href="https://mlv.sh/youtube"
            className="text-blue-500 hover:underline"
          >
            YouTube
          </a>{" "}
          to help developer to increase their competences.
        </p>
      </header>
      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h2
            className={clsx(
              GeistPixelGrid.className,
              "text-lg lg:text-xl font-medium"
            )}
          >
            Experiences
          </h2>
          <ul className="list-none flex flex-col gap-0.5">
            {experiences.map((experience, i) => (
              <li key={i}>
                <span className={clsx(GeistPixelGrid.className, "text-neutral-400 mr-1")}>{">"}</span>
                {experience.role} at <ConditionalLink {...experience.company} />{" "}
                <span className="text-neutral-700">- {experience.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h2
            className={clsx(
              GeistPixelGrid.className,
              "text-lg lg:text-xl font-medium"
            )}
          >
            Projects
          </h2>
          <ul className="list-none flex flex-col gap-0.5">
            {projects.map((project, i) => (
              <li key={i}>
                <span className={clsx(GeistPixelGrid.className, "text-neutral-400 mr-1")}>{">"}</span>
                <ConditionalLink {...project.name} /> - {project.description}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer
        className={clsx(
          GeistPixelGrid.className,
          "flex items-center gap-4 lg:gap-8 flex-wrap text-neutral-700 uppercase"
        )}
      >
        <a className="hover:underline" href="https://mlv.sh/twitter">
          X
        </a>
        <a className="hover:underline" href="https://mlv.sh/linkedin">
          LinkedIn
        </a>
        <a className="hover:underline" href="https://mlv.sh/github">
          GitHub
        </a>
        <a className="hover:underline" href="https://mlv.sh/youtube">
          YouTube
        </a>
        <a className="hover:underline" href="https://codelynx.dev/posts">
          Blog
        </a>
        <a className="hover:underline" href="https://melvynx.com">
          Melvynx.com
        </a>
      </footer>
    </div>
  );
}
