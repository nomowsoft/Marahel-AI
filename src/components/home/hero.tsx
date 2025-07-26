import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
    const locale = useLocale();
    const isArabic = locale === 'ar';
    const t = useTranslations("Hero");
    return (
        <section className="">
            <div className="py-8 mx-5 md:mx-20">
                <h1 className="text-center text-primary text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold" data-aos="fade-up">
                    {t('title')}
                </h1>
                <p className="text-center mx-auto max-w-screen-xl leading-relaxed mt-10 xl:text-xl font-doto2 font-bold text-gray-700" data-aos="zoom-in">
                    {t('description')}
                </p>
                <p className="text-center mx-auto max-w-screen-xl mt-5 xl:text-xl font-extrabold" data-aos="fade-in">
                    {t('description2')}
                </p>
                <div className="flex justify-center items-center" data-aos="zoom-in">
                    <Image src="/hero/ai.gif" alt="hero" width={700} height={20} className={` ${ isArabic ? 'block' : 'hidden'}`} />
                    <Image src="/hero/aien.gif" alt="hero" width={700} height={20} className={`${ isArabic ? 'hidden' : 'block' }`} />
                </div>
            </div>
            <hr className="text-primary opacity-10" />
        </section>
    )
}

export default Hero