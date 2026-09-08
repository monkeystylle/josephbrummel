import Image from 'next/image';
import { LOGOS } from '@/constants/constants';

const TechAndToolsLogo = () => {
  return (
    <div className="flex gap-12 max-lg:grid max-lg:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] max-lg:gap-4 max-sm:grid-cols-3 max-sm:gap-2">
      {LOGOS.map(logo => (
        <div key={logo.name} className="mt-8 flex flex-col items-center">
          <div className="relative size-20">
            <Image
              src={logo.image1}
              alt={logo.name}
              fill
              placeholder="blur"
              className="object-fill"
            />
          </div>
          <h4 className="text-center text-base text-zinc-700">{logo.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default TechAndToolsLogo;
