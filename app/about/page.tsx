import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';

const About = () => {
  return (
    <div className="font-gilroy font-normal text-local-gray-t text-sexteen  pt-[107px]">
      <section className="h-[calc(100vh-107px)] bg-local-gray-b">
        <Breadcrumbs items={breadcrumbItems} />
        ABOUT
      </section>
    </div>
  );
};

export default About;
