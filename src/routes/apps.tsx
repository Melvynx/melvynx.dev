import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { apps, type App } from "@/apps.data";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Apps - Melvyn Malherbe" },
      {
        name: "description",
        content: "Small Mac apps I built for myself and give away.",
      },
    ],
  }),
  component: Apps,
});

const linkClass =
  "text-neutral-400 underline-offset-4 transition-colors duration-150 hover:text-neutral-900 hover:underline";

function Apps() {
  return (
    <div className="mx-auto flex min-h-full max-w-4xl flex-col gap-14 px-6 py-10 lg:gap-20 lg:py-16">
      <Reveal>
        <header className="flex items-baseline justify-between">
          <Link to="/" className="font-medium">
            Melvyn Malherbe
          </Link>
          <nav className="flex gap-5 text-neutral-400">
            <Link className={linkClass} to="/">
              home
            </Link>
            <span className="text-neutral-900">apps</span>
            <a className={linkClass} href="https://mlv.sh/twitter">
              contact
            </a>
          </nav>
        </header>
      </Reveal>

      <main className="flex flex-1 flex-col gap-10 lg:gap-14">
        <Reveal delay={60}>
          <section className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Apps
            </h1>
            <p className="text-neutral-600">
              Small Mac apps I built because I needed them every day. They are
              all free to download.
            </p>
          </section>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {apps.map((app, index) => (
            <li key={app.slug} className="flex">
              <Reveal delay={120 + index * 50} className="flex w-full">
                <AppCard app={app} />
              </Reveal>
            </li>
          ))}
        </ul>
      </main>

      <Reveal delay={420}>
        <footer className="border-t border-neutral-100 pt-8 text-neutral-400">
          Made by{" "}
          <Link className={linkClass} to="/">
            Melvyn
          </Link>
          , mostly for myself.
        </footer>
      </Reveal>
    </div>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <article className="flex w-full flex-col rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-100 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <img
          src={`/apps/${app.slug}.webp`}
          alt=""
          width={256}
          height={256}
          loading="lazy"
          className={`size-16 drop-shadow-[0_6px_10px_rgb(0_0_0/0.12)] ${app.fullBleedIcon ? "scale-[0.82]" : ""}`}
        />
        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200">
          {app.price}
        </span>
      </div>
      <h2 className="mt-6 text-xl font-semibold tracking-tight">{app.name}</h2>
      <p className="mt-1 font-medium text-neutral-500">{app.tagline}</p>
      <p className="mt-3 flex-1 text-pretty text-neutral-600">
        {app.description}
      </p>
      <p className="mt-5 text-sm text-neutral-400">{app.platform}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={app.download}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-900 px-4 text-sm font-medium text-white transition-[background-color,transform] duration-150 hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:scale-[0.97]"
          aria-label={`Download ${app.name}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-4"
          >
            <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" />
          </svg>
          Download
        </a>
        {app.site ? (
          <a className={`text-sm ${linkClass}`} href={app.site}>
            Website
          </a>
        ) : null}
        {app.source ? (
          <a className={`text-sm ${linkClass}`} href={app.source}>
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
