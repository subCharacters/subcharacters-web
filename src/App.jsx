import ThemeToggle from './components/ThemeToggle';
import { projects } from './data/projects';

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-accent" />
          SubCharacters
        </a>
        <div className="flex items-center gap-1 text-sm">
          <a href="#projects" className="rounded-full px-3 py-1.5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Projects
          </a>
          <a href="#about" className="rounded-full px-3 py-1.5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            About
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 은은한 그리드 + 글로우 배경 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(113_113_122/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(113_113_122/0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl dark:bg-lime-400/10" />

      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-28 sm:pt-36">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          Side projects in progress
        </p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          만들고 싶은 걸
          <br />
          <span className="text-zinc-400 dark:text-zinc-500">만드는 곳.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          부업으로 이것저것 만들면서 재미 삼아 운영하는 페이지입니다.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            프로젝트 보기
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            소개
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-14 px-5 py-24">
      <SectionHeading eyebrow="Projects" title="진행 중인 프로젝트" />
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-black/40"
          >
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{String(idx + 1).padStart(2, '0')}</span>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="About" title="SubCharacters 소개" />
        <div className="space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">SubCharacters</strong>는 본업 외 시간에
            게임, 웹 도구, 인터랙티브 콘텐츠를 실험하는 개인 작업 공간입니다.
          </p>
          <p>완성도보다 재미를 우선하며, 만들어지는 대로 이곳에 하나씩 올려 둡니다.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} SubCharacters</p>
        <p className="font-mono text-xs">Built with React · Vite · Tailwind</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
