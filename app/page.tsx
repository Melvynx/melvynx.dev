import Image from "next/image";
import { ConditionalLink } from "./components/ConditionalLink";
import { Reveal } from "./components/Reveal";
import { experiences, projects, socials } from "./home.data";

const linkClass =
  "text-neutral-400 underline-offset-4 transition-colors duration-150 hover:text-neutral-900 hover:underline";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col gap-14 px-6 py-10 lg:gap-20 lg:py-16">
      <Reveal>
        <header className="flex items-baseline justify-between">
          <span className="font-medium">Melvyn Malherbe</span>
          <nav className="flex gap-5 text-neutral-400">
            <a className={linkClass} href="#work">
              work
            </a>
            <a className={linkClass} href="https://codelynx.dev/posts">
              writing
            </a>
            <a className={linkClass} href="https://mlv.sh/twitter">
              contact
            </a>
          </nav>
        </header>
      </Reveal>

      <main className="flex flex-1 flex-col gap-14 lg:gap-20">
        <Reveal delay={60}>
          <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Image
              src="/melvyn.webp"
              width={1254}
              height={1254}
              alt="Engraved portrait of Melvyn Malherbe"
              sizes="(min-width: 640px) 176px, 144px"
              preload
              className="size-36 shrink-0 mix-blend-multiply sm:order-last sm:size-44"
            />
            <div className="flex flex-col gap-4 text-pretty">
              <h1 className="font-semibold">
                I build software, and I teach how to build it.
              </h1>
              <p className="text-neutral-600">
                I&apos;m a software engineer and entrepreneur, founder of{" "}
                <a className={linkClass} href="https://codelynx.dev">
                  codelynx
                </a>
                , where I publish online coding courses and tutorials.
              </p>
              <p className="text-neutral-600">
                I also create content on{" "}
                <a className={linkClass} href="https://mlv.sh/youtube">
                  youtube
                </a>{" "}
                to help developers get better at their craft.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section className="flex flex-col gap-4">
            <h2 className="font-semibold">Experience</h2>
            <p className="text-neutral-600">
              Product engineering, entrepreneurship and teaching since 2018.
            </p>
            <ul className="mt-2 flex flex-col gap-6">
              {experiences.map((experience) => (
                <li
                  key={experience.role}
                  className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-x-6"
                >
                  <span className="text-neutral-400 sm:pt-0.5">
                    {experience.date}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="font-medium">
                      {experience.role} at{" "}
                      <ConditionalLink {...experience.company} />
                    </h3>
                    <p className="text-pretty text-neutral-500">
                      {experience.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={180}>
          <section id="work" className="flex flex-col gap-4 scroll-mt-10">
            <h2 className="font-semibold">Projects</h2>
            <p className="text-neutral-600">
              small products I designed, built and shipped, mostly alone.
            </p>
            <ul className="mt-2 flex flex-col gap-3 sm:gap-2">
              {projects.map((project) => (
                <li
                  key={project.name.text}
                  className="flex flex-col justify-between gap-x-6 sm:flex-row sm:items-baseline"
                >
                  <ConditionalLink {...project.name} />
                  <span className="text-neutral-400 sm:text-right">
                    {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </main>

      <Reveal delay={240}>
        <footer className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-100 pt-8">
          {socials.map((social) => (
            <a key={social.text} className={linkClass} href={social.url}>
              {social.text}
            </a>
          ))}
          <a className={linkClass} href="https://lumail.io?ref=melvynx">
            Email sent by Lumail.io
          </a>
        </footer>
      </Reveal>
    </div>
  );
}
