import Image from 'next/image';
import { useTranslations } from "next-intl";
import { getFeatures } from '@/utils/data';

const Features = () => {
    const t = useTranslations('Features');
    const values = getFeatures(t);
    return (
        <section className="py-20">
            <h1 className="text-primary text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:mb-20" data-aos="fade-down">
                {t('title')}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mx-5 lg:mx-10 mt-10" data-aos="fade-up">
                {values?.map((item) => (
                    <div className="bg-white rounded-xl py-4 px-4 w-full md:w-1/3 lg:w-1/4 flex flex-col" key={item.id}>
                        <div className="flex justify-center">
                            <Image src={item.image} alt={item.title} width={400} height={100} className="mt-4" />
                        </div>
                        <h2 className="text-lg lg:text-xl font-bold mt-8">{item.title}</h2>
                        <p className="text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features