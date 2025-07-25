import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { getService2 } from "@/utils/data";


const Service2 = ({ enabled }: { enabled: boolean }) => {
    const t = useTranslations('Service2');
    const steps = getService2(t);
    const locale = useLocale();
    const isArabic = locale === 'ar';
    const [activeStep, setActiveStep] = useState(1);
    const [selectedSteps, setSelectedSteps] = useState([1]);

   useEffect(() => {
        if (enabled && activeStep < steps.length) {
        const timer = setTimeout(() => {
            const nextStep = activeStep + 1;
            setSelectedSteps((prev) => [...prev, nextStep]);
            setActiveStep(nextStep);
        }, 1500);
        return () => clearTimeout(timer);
        }
    }, [activeStep, steps.length, enabled]);

    return (
        <section className={`${enabled ? 'block' : 'hidden'}`} data-aos="fade-up" >
            <div className="lg:py-16 px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl lg:mx-auto">
                <h1 className=" text-xl lg:text-2xl xl:text-3xl font-extrabold my-10" data-aos="fade-up">
                    2. {t('title')}
                </h1>
                <div className="container lg:mx-auto flex flex-col lg:flex-row items-center lg:gap-12 bg-white rounded-2xl py-10 px-5">
                    <div className="w-full lg:w-2/3 flex flex-col gap-6 relative" data-aos={isArabic ? "fade-left" : "fade-up"}>
                        <div className={`absolute top-6 bottom-6 w-px z-0 lg:left-8 ${isArabic ? 'right-7' : 'left-7'}`}>
                            <div className="w-full h-full flex flex-col justify-between">
                                {steps.slice(0, steps.length - 1).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-full ${activeStep > index + 1 ? "bg-primary" : "bg-gray-200"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {steps.map((step) => (
                            <div key={step.id} className="flex items-center gap-4 relative z-10">
                                <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center text-sm font-medium transition flex-shrink-0
                                            ${selectedSteps.includes(step.id)
                                            ? "bg-gray-200 text-primary border-primary"
                                            : "bg-white text-primary border-gray-200"
                                        }`}
                                >
                                    {step.id}
                                </div>

                                <AnimatePresence>
                                    {selectedSteps.includes(step.id) && (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="max-w-lg"
                                        >
                                            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
                                                {step.title}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full lg:w-1/2 h-96 lg:h-[32rem] flex justify-center bg-gray-200 rounded-3xl overflow-hidden px-2 sm:px-4 py-6" data-aos="fade-down">
                        <Image
                            src="/service/image2.svg"
                            alt="..."
                            width={500}
                            height={500}
                            className="w-full h-full rounded-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Service2;
