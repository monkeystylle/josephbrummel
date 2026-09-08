import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Fragment } from 'react';
import { PROJECTS } from '@/constants/constants';
import Badge from './Badge';

const SampleSection = () => {
  return (
    <section>
      <h2 className="mb-8 tracking-tight text-4xl font-bold text-neutral-800 max-lg:text-3xl max-sm:text-2xl">
        Sample Projects
      </h2>

      <div className="grid auto-rows-[400px] grid-cols-3 gap-16 max-lg:auto-rows-[380px] max-lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-lg:gap-8 max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-8 max-sm:grid-cols-1 max-sm:gap-12">
        {PROJECTS.map(project => (
          <div
            key={project.id}
            className="relative flex flex-col rounded-lg bg-linear-to-b from-neutral-400 from-[34%] to-zinc-700 p-3 text-white shadow-md drop-shadow-lg transition-[filter] duration-200 ease-out hover:drop-shadow-2xl"
          >
            <div className="relative h-[55%] w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                placeholder="blur"
                className="rounded object-fill"
              />
            </div>

            <a
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block self-start text-2xl text-neutral-100 underline transition-colors duration-150 hover:text-neutral-300 hover:no-underline max-lg:text-base"
            >
              <h3>{project.name}</h3>
            </a>

            <h4 className="mt-2 whitespace-pre-line text-left text-sm font-light leading-5 text-neutral-100">
              {Array.isArray(project.subtitle)
                ? project.subtitle.map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      {index < project.subtitle.length - 1 && <br />}
                    </Fragment>
                  ))
                : project.subtitle}
            </h4>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex gap-2">
                {project.showGithubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="origin-bottom-right transition-transform duration-200 hover:scale-[1.08] hover:text-neutral-300"
                  >
                    <FaGithub size={32} />
                  </a>
                )}
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="origin-bottom-right transition-transform duration-200 ease-in-out hover:scale-105 hover:text-neutral-300"
                >
                  <ExternalLink size={32} />
                </a>
              </div>
            </div>

            {project.withBadge && <Badge variant={project.badgeVariant} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleSection;
