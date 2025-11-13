import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ProductSecurityProps {
    product: ProductsItem;
}

const ProductSecurity: React.FC<ProductSecurityProps> = ({ product }) => {
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
        <section className="text-white py-20">
            <div className="container mx-auto px-4">
                <div className=" mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                        {t('security')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-8">
                    {foundProduct.security.map((step, index) => (
                        <Card
                            key={index}
                            className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <h3 className="text-xl font-bold text-foreground">
                                {step.title}
                            </h3>
                            {step.SecurityItem.map((step, index) => (
                                <div key={index} className="my-2 flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <span className="text-muted-foreground text-sm leading-relaxed px-2">
                                        {step.text}
                                    </span>
                                </div>
                            ))}
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <h1 className="text-primary text-3xl">
                        {foundProduct.footertitle}
                    </h1>
                    <p className="text-white mt-4">
                        {foundProduct.footertext}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-center items-center pt-10 w-full">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-center"
                    >
                        
                        {t('takebutton')}
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group text-center"
                    >
                        {t('downloadbutton')}
                    </Button>
                </div>
            </div>
        </section>

    );
};
export default ProductSecurity;