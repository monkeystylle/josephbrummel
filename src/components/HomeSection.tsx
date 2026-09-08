import ScrollArrow from './ScrollArrow';

const HomeSection = () => {
  return (
    <section className="relative flex h-screen flex-col items-start justify-center max-lg:mt-32 max-lg:h-auto max-lg:justify-start">
      <h1 className="text-6xl font-semibold tracking-tight text-slate-900 max-sm:text-5xl">
        Hi i&apos;m Joseph! <br />
        I&apos;m a Frontend Developer.
      </h1>
      <article className="w-[60%] max-lg:w-auto mt-[16px]">
        <p className="text-xl/[1.5] text-zinc-700 max-lg:text-lg/[1.55]">
          I am based in Manila Philippines.
          <br className="max-sm:hidden" /> I love Crafting Page Layouts and Ui
          Components.
        </p>
      </article>
      <ScrollArrow />
    </section>
  );
};

export default HomeSection;
