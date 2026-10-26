import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '@/constants/constants';

const pill =
  'inline-flex h-7 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 ease-out';

const SampleSection = () => {
  return (
    <section id="projects">
      <h2 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 max-sm:text-4xl">
        Projects
      </h2>
      <p className="mt-3 text-xl/[1.5] text-zinc-700 max-lg:text-lg/[1.55]">
        Things I&apos;ve built to learn, experiment, and ship.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map(project => (
          <article
            key={project.id}
            className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-white pb-6 shadow-overlay transition-shadow duration-200 ease-out hover:shadow-overlay-hover"
          >
            {/* Screenshot band */}
            <div className="relative aspect-[16/10] border-b border-slate-900/[0.06] bg-slate-50">
              <div className="absolute inset-x-[22px] top-[22px] bottom-0 overflow-hidden rounded-t-lg shadow-[0_0_0_1px_rgb(15_23_42/0.06),0_6px_18px_rgb(15_23_42/0.08)] transition-transform duration-[250ms] ease-out-strong group-hover:-translate-y-[3px] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col px-6">
              {/* Stack */}
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                {project.stack.join(' · ')}
              </p>

              {/* Actions */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source code on GitHub`}
                    className={`${pill} relative z-10 before:absolute before:-inset-x-1 before:-inset-y-2 before:content-[''] hover:border-slate-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:scale-[0.97]`}
                  >
                    <FaGithub size={14} aria-hidden />
                    Code
                  </a>
                )}
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live site`}
                  className={`${pill} after:absolute after:inset-0 after:rounded-2xl after:content-[''] group-hover:border-slate-300 group-hover:text-slate-900 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-slate-900`}
                >
                  Live
                  <ArrowUpRight
                    size={13}
                    aria-hidden
                    className="transition-transform duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px motion-reduce:transition-none"
                  />
                </a>
              </div>

              {/* Title + description */}
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em] text-slate-900">
                {project.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SampleSection;
