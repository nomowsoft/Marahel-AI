"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { getProducts } from '@/utils/data';

const Products = () => {
    const t = useTranslations('Products');
    const steps = getProducts(t);
    const [activeStep, setActiveStep] = useState(1);
    const [isManuallySelected, setIsManuallySelected] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);
    const current = steps.find((s) => s.id === activeStep);
    const locale = useLocale();
    const isArabic = locale === 'ar';

    // Intersection Observer: مراقبة ظهور السكشن
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5, // نصف العنصر ظاهر
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // التنقل التلقائي بعد كل 3 ثواني
    useEffect(() => {
        if (!isVisible || isManuallySelected) return;

        const timer = setTimeout(() => {
            setActiveStep(prev => (prev >= steps.length ? 1 : prev + 1));
        }, 3000);

        return () => clearTimeout(timer);
    }, [activeStep, isManuallySelected, isVisible, steps.length]);

    const handleStepClick = (id: number) => {
        setActiveStep(id);
        setIsManuallySelected(true); // توقف التنقل التلقائي عند اختيار يدوي
    };

    return (
        <section className="bg-white" ref={sectionRef}>
            <h1 className="text-primary text-xl lg:text-2xl xl:text-3xl font-extrabold lg:mb-10 text-center" data-aos="fade-up">
                {t('title')}
            </h1>
            <div className="lg:py-16 px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl lg:mx-auto">
                <div className="container lg:mx-auto flex flex-col-reverse lg:flex-row items-center lg:gap-12">
                    {/* Text content */}
                    <div className="w-full lg:w-1/2" data-aos={isArabic ? "fade-left" : "fade-up"}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current?.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-black mb-3">
                                    {current?.number}
                                </h3>
                                <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                                    {current?.title}
                                </h2>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                    {current?.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Steps buttons */}
                    <div className="w-full lg:w-1/12 flex justify-center lg:justify-start relative gap-6 mt-6 lg:mt-0">
                        <div className="flex flex-wrap lg:flex-col items-center relative">
                            <div className="absolute top-6 bottom-6 w-px z-0">
                                <div className="w-full h-full hidden lg:flex flex-col justify-between">
                                    {steps.slice(0, steps.length - 1).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-full h-full ${activeStep > index + 1 ? "bg-primary" : "bg-gray-200"}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-1 flex items-center justify-center text-sm font-medium mb-6 transition ${activeStep === step.id
                                        ? "bg-gray-200 text-primary border-primary"
                                        : "bg-white text-primary border-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {step.id}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image preview */}
                    <div className="relative w-80 md:w-1/2 lg:w-1/2 h-96  lg:h-[32rem] flex justify-center bg-gray-200 rounded-3xl overflow-hidden px-2 sm:px-4 py-6" data-aos="fade-in">
                        <div className="bg-white rounded-2xl w-48 sm:w-64 h-[22rem] lg:h-[25rem] absolute top-8 left-8 lg:flex items-center justify-center hidden"></div>
                        <div className="bg-white rounded-2xl w-48 sm:w-64 h-[22rem] lg:h-[25rem] absolute top-20 right-8 lg:flex items-center justify-center hidden"></div>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={current?.id}
                                src={current?.image}
                                alt="عرض بياني"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="w-64 sm:w-80 h-64 sm:h-80 rounded-2xl absolute top-0 left-0 right-0 bottom-0 m-auto"
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
