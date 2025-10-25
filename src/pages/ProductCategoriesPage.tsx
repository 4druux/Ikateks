import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";
import ProductCategories from "../components/products/ProductCategories";
import { useTranslation } from "react-i18next";

const ProductCategoriesPage = () => {
  const { t } = useTranslation("product");

  return (
    <div className="min-h-screen">
      <Hero
        imageSrc="/images/office-2.jpg"
        title={t("productCategoriesPage.hero.title")}
        description={t("productCategoriesPage.hero.description")}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-10 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28">
        <ProductCategories />
      </div>

      <CallToAction
        title={t("productCategoriesPage.cta.title")}
        linkText={t("productCategoriesPage.cta.linkText")}
      />
    </div>
  );
};

export default ProductCategoriesPage;
