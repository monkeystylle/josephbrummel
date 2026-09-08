import AboutMe from './AboutMe';
import ScrollArrow from './ScrollArrow';

const HomeSection = () => {
  return (
    <section className="relative flex h-screen flex-col items-start justify-center max-lg:mt-32 max-lg:h-auto max-lg:justify-start">
      <h1 className="text-6xl font-bold text-slate-900 max-lg:text-4xl max-sm:text-2xl">
        Hi i&apos;m Joseph! <br />
        I&apos;m a Frontend Developer.
      </h1>
      <AboutMe />
      <ScrollArrow />
    </section>
  );
};

export default HomeSection;
