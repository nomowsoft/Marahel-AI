import Image from "next/image";
import { useTranslations } from "next-intl";
import { getDifference } from "@/utils/data";


const Difference = () => {
  const t = useTranslations('Difference');
  const difference = getDifference(t);
  return (
    <section className="py-20 bg-white">
      <h1 className="text-primary text-2xl xl:text-3xl font-extrabold text-center lg:mb-3" data-aos="fade-up">
        {t('title')}
      </h1>
      <h1 className="text-primary text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:mb-20" data-aos="fade-down">
        {t('title0')}
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mx-5 lg:mx-10 mt-10">
        {difference?.map((item) => (
          <div className="bg-gray-100 rounded-xl py-4 px-4 w-full md:w-1/3 lg:w-1/4 flex flex-col" key={item.id} data-aos="zoom-in">

            <div className="flex justify-between items-center">
              <h2 className="text-lg lg:text-xl font-bold">{item.title}</h2>
              <Image src={item.image} alt={item.title} width={30} height={100} className="mt-4" />
            </div>
            <p className="text-gray-500 mt-4 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Difference