import HomeSection from '@/components/HomeSection';
import TechAndTools from '@/components/TechAndTools';
import SampleSection from '@/components/SampleSection';

export default function Home() {
  return (
    <>
      <HomeSection />
      <div className="max-lg:mt-32 max-sm:mt-[90px]">
        <TechAndTools />
      </div>
      <div className="mt-[200px] mb-[200px] max-lg:my-32 max-sm:my-[90px]">
        <SampleSection />
      </div>
    </>
  );
}
