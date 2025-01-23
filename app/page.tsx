export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 lg:pt-8 min-h-full flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="font-caption text-2xl lg:text-3xl font-bold">
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
          <h2 className="font-caption text-lg lg:text-xl font-medium">
            Experiences
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-medium">Full-Stack Online Trainer</span> at{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://codelynx.dev"
              >
                Codelynx.dev
              </a>{" "}
              <span className="text-neutral-700">- 2022 - now</span>
            </li>
            <li>
              <span className="font-medium">Full-stack Freelance</span> at YuZu{" "}
              <span className="text-neutral-700">- 2022</span>
            </li>
            <li>
              <span className="font-medium">Software Engineer</span> at{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://qoqa.ch"
              >
                QoQa.ch
              </a>{" "}
              <span className="text-neutral-700">- 2018 - 2022</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-caption text-lg lg:text-xl font-medium">
            Projects
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://codeline.app"
                className="text-blue-500 font-medium hover:underline"
              >
                Codeline.app
              </a>{" "}
              - Online developer courses LMS
            </li>
            <li>
              <a
                href="https://chat2code.dev"
                className="text-blue-500 font-medium hover:underline"
              >
                Chat2Code
              </a>{" "}
              - AI-powered frontend code generation tool
            </li>
            <li>
              <a
                href="https://quizup.app"
                className="text-blue-500 font-medium hover:underline"
              >
                QuizUp
              </a>{" "}
              - AI-powered quiz generation platform
            </li>
            <li>
              <a
                href="https://bulkcorrector"
                className="text-blue-500 font-medium hover:underline"
              >
                BulkCorrector
              </a>{" "}
              - AI grammar correction tool for large texts
            </li>
            <li>
              <a
                href="https://askschema.com"
                className="text-blue-500 font-medium hover:underline"
              >
                AskSchema
              </a>{" "}
              - Chat with your database easily
            </li>
          </ul>
        </div>
      </main>
      <footer className="flex items-center gap-4 lg:gap-8 flex-wrap text-neutral-700">
        <a
          className="text-neutral-700 hover:underline"
          href="https://mlv.sh/twitter"
        >
          X
        </a>
        <a
          className="text-neutral-700 hover:underline"
          href="https://mlv.sh/linkedin"
        >
          LinkedIn
        </a>
        <a
          className="text-neutral-700 hover:underline"
          href="https://mlv.sh/github"
        >
          GitHub
        </a>
        <a
          className="text-neutral-700 hover:underline"
          href="https://mlv.sh/youtube"
        >
          YouTube
        </a>
        <a
          className="text-neutral-700 hover:underline"
          href="https://codelynx.dev/posts"
        >
          Blog
        </a>
        <a
          className="text-neutral-700 hover:underline"
          href="https://melvynx.com"
        >
          Melvynx.com
        </a>
      </footer>
    </div>
  );
}
