import Image from "next/image";
import { useTranslations } from "next-intl";
import { getSolutions } from '@/utils/data';


const Solutions = () => {
  const t = useTranslations('Solutions');
  const values = getSolutions(t);
  return (
    <section className="lg:bg-[url('/solutions/back2.svg')] bg-cover bg-no-repeat bg-white py-20">
      <h1 className="text-primary text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:mt-20" data-aso="fade-up">
        {t('title')}
      </h1>
      <div className="flex flex-wrap justify-center mx-5 lg:mx-10 mt-10 lg:bg-[url('/solutions/line.svg')] bg-center bg-no-repeat">
        {values.map((item) => (
          <div
            key={item.id}
            className="py-4 px-4 w-full md:w-1/3 lg:w-1/4 flex flex-col lg:mt-6"
          >
            <div className="flex justify-center" data-aos="fade-down">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="mt-4"
              />
            </div>
            <h2 className="text-lg lg:text-xl font-doto2 text-center font-bold">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 rounded-4xl py-4 px-4 mx-4 md:max-w-screen-md lg:max-w-screen-lg md:mx-auto mt-10 mb-20" data-aos="zoom-in">
        <p className="mt-2 text-xl text-center leading-loose lg:px-20 py-6 shadow-indigo-200-2xl font-doto2 font-bold">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default Solutions;
