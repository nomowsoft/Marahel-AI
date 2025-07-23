import Image from "next/image";
import { getAddValues } from "@/utils/data";
import { useTranslations } from "next-intl";

const AddValue = () => {
    const t = useTranslations('AddValue');
    const values = getAddValues(t);
    return (
        <section className="lg:mt-12 py-8">
            <h1 className="text-center text-primary text-2xl xl:text-3xl 2xl:text-4xl font-extrabold" data-aos="fade-down">
                {t('title')}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mx-5 lg:mx-10 mt-10">
                {values?.map((item) => (
                    <div className="bg-white rounded-xl py-8 px-8 w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center" key={item.id} data-aos="fade-up">
                        <Image src={item.image} alt={item.title} width={60} height={100} className="mt-4" />
                        <h2 className="text-lg lg:text-xl font-bold mt-4">{item.title}</h2>
                        <p className="text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AddValue