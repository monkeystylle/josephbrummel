import { Clock, MapPin } from 'lucide-react';
import ScrollArrow from './ScrollArrow';
import ManilaClock from './ManilaClock';

const chip =
  'inline-flex h-9 items-center gap-2 rounded-full border border-slate-300/70 bg-white px-3.5 text-sm text-slate-600 tabular-nums';

const HomeSection = () => {
  return (
    <section className="relative flex h-screen flex-col items-start justify-center max-lg:mt-32 max-lg:h-auto max-lg:justify-start">
      <h1 className="text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 max-sm:text-5xl">
        Hi, I&apos;m Joseph — <br />a Frontend Web Developer.
      </h1>

      <p className="mt-4 max-w-[52ch] text-xl/[1.5] text-zinc-700 max-lg:text-lg/[1.55]">
        I craft page layouts and UI components that feel good to use.
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        <span className={chip}>
          <MapPin size={15} aria-hidden className="shrink-0 text-slate-500" />
          Based in Manila, Philippines
        </span>
        <span className={chip}>
          <Clock size={15} aria-hidden className="shrink-0 text-slate-500" />
          <span>
            <ManilaClock /> · UTC+8
          </span>
        </span>
      </div>

      <ScrollArrow />
    </section>
  );
};

export default HomeSection;
