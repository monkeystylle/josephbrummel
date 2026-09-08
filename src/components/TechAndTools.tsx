import TechAndToolsLogo from './TechAndToolsLogo';

const TechAndTools = () => {
  return (
    <section>
      <h2 className="mb-2 tracking-tight text-4xl font-bold text-neutral-800 max-lg:text-3xl max-sm:text-2xl">
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
