import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Policy = () => {
    const t = useTranslations('Policy');
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <section className="py-20 bg-white">
            <div className="lg:max-w-screen-xl lg:mx-auto px-5 lg:px-20">
                <div className="flex justify-center items-center">
                    <div className="flex w-1/4 justify-center">
                        <Image src="/policy/line.svg" alt="Line" width={500} height={100} className="lg:mb-10" />
                    </div>
                    <div className="w-full pb-5 lg:w-1/3 text-center">
                        <h1 className="text-primary text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:mb-10" data-aos="fade-up">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="flex justify-center w-1/4">
                        <Image src="/policy/line.svg" alt="Line" width={500} height={100} className="lg:mb-10" />
                    </div>
                </div>
                <p className="text-gray-500 text-lg lg:text-xl xl:text-2xl font-doto2 font-extrabold text-center leading-loose mx-5 lg:mx-16" data-aos="fade-down">
                    {t('description')}
                </p>
                <div className="rounded-3xl bg-slate-500 text-white bg-health relative bg-cover bg-no-repeat mt-4" data-aos="zoom-in">
                    <div className="flex flex-col md:flex-row">
                        <Image
                            src="/policy/Background.svg"
                            alt="..."
                            height={200}
                            width={3000}
                            className={`w-full md:w-auto h-76 md:h-64 lg:h-76 xl:h-auto object-cover rounded-3xl ${isArabic ? 'block' : 'hidden'}`}
                        />
                        <Image
                            src="/policy/back2.svg"
                            alt="..."
                            height={200}
                            width={3000}
                            className={`w-full md:w-auto h-76 md:h-64 lg:h-76 xl:h-auto object-cover rounded-3xl ${isArabic ? 'hidden' : 'block'}`}
                        />
                        <div className="mt-2 absolute md:mt-0 w-full md:mx-8">
                            <h1 className={`text-white text-xl lg:text-2xl 2xl:text-3xl text-center md:text-4xl font-bold mt-2 lg:mt-10 ${isArabic ? 'md:text-right' : 'md:text-left'} md:text-left md:w-1/2 font-doto2`} data-aos="fade-up">
                                {t('title_card')}
                            </h1>
                            <p className={`text-white text-lg lg:text-xl 2xl:text-2xl text-center md:text-3xl font-doto2 font-extrabold mt-4 md:w-1/2 leading-relaxed ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
                                {t('description_card')}
                            </p>
                            <div className="flex mt-6 justify-center md:justify-start">
                                <Link href={`/${locale}/contact_us`} className="bg-primary text-white p-4 rounded-lg text-2xl">
                                    {t('contactus')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Policy