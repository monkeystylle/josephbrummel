import TechAndToolsLogo from './TechAndToolsLogo';

const TechAndTools = () => {
  return (
    <section>
      <h2 className="mb-2 text-5xl font-semibold tracking-tight text-neutral-800 max-sm:text-4xl">
        Skills
      </h2>
      <p className="text-xl text-zinc-700 max-sm:text-base">
        Tools, technologies and frameworks
        <br /> that im learning and using.
      </p>
      <TechAndToolsLogo />
    </section>
  );
};

export default TechAndTools;
