import Image from 'next/image';
import { useLocale, useTranslations } from "next-intl";

const Experience = () => {
    const t = useTranslations('Experience');
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <section className="px-5 md:px-20 bg-[url('/experience/bg.svg')] bg-cover bg-no-repeat lg:pt-32">
            <div className="py-24 lg:max-w-screen-xl mx-auto">
                <div className="bg-white px-5 lg:px-16 py-8 text-center lg:text-start lg:py-26 2xl:py-44 my-4 lg:my-0 2xl:my-32 rounded-xl shadow-lg">
                    <div className="lg:flex justify-center items-center">
                        <div className="lg:w-1/2" data-aos={isArabic ? "fade-left" : "fade-right"}>
                            <h1 className="text-primary lg:text-xl xl:text-3xl font-extrabold">
                                {t('title')}
                            </h1>
                            <p className="text-gray-500 leading-loose mt-4 *:lg:text-lg xl:text-2xl font-doto2 font-extrabold">
                                {t('description')}
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-down">
                            <Image src="/experience/experience.svg" alt="Experience" width={800} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience