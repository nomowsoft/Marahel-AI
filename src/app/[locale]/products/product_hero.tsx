import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProductHeroProps {
    product: ProductsItem;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
    const t = useTranslations("products");
    const products = React.useMemo(() => getProducts(t), [t]);

    const foundProduct = React.useMemo(
        () => products.find((p) => p.id === product.id),
        [products, product.id]
    );

    if (!foundProduct) {
        return (
            <section className="text-white mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-semibold text-red-400">
                        Product not found
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section className="text-white mt-24 md:mt-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Right side: Text & Buttons */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-accent">
                            {foundProduct.title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
                            {foundProduct.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4  items-center pt-4 w-full">
                            {/* Primary Button */}
                            {/* <Button
                                size="lg"
                                className="w-full sm:w-auto bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-center"
                            >
                                {t('demobutton')}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button> */}

                            {/* Outline Button */}
                            {/* <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group text-center"
                            >
                                <Play className="ml-2 h-5 w-5" />
                                {t('downloadbutton')}
                            </Button> */}
                        </div>
                    </div>
                    {/* Left side: Demo */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                        <div className="w-full max-w-[600px]">{foundProduct.demo}</div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default ProductHero;
