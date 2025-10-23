import { useRef } from "react";
import Lenis from "lenis";
import Hero from "../components/home/Hero";
import News from "../components/home/News";
import About from "../components/home/About";
import ProductCategories from "../components/products/ProductCategories";
import Grow from "../components/home/Grow";
import CallToAction from "../components/ui/CallToAction";
import { useTranslation } from "react-i18next";
import Services from "../components/services/Services";
import Customer from "../components/home/Customer";

interface HomeProps {
  lenis: Lenis | null;
}

const HomePage = ({ lenis }: HomeProps) => {
  const { t } = useTranslation("home");
  const newsSectionRef = useRef<HTMLElement | null>(null);

  const handleScrollDown = () => {
    if (newsSectionRef.current) {
      lenis?.scrollTo(newsSectionRef.current, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero onScrollDown={handleScrollDown} />
      <News lenis={lenis} newsSectionRef={newsSectionRef} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-10 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32 2xl:space-y-40">
        <About />
        <ProductCategories
          headlineKey="product.headline"
          headlineSpanKey="product.headline-span"
          descriptionKey="product.description"
          limit={6}
          showViewAllButton={true}
        />
        <Grow />
        <Services lenis={lenis} limit={6} showViewAllButton={true} />
        <Customer />
      </div>

      <CallToAction
        title={t("homePage.cta.title")}
        linkText={t("homePage.cta.linkText")}
      />
    </div>
  );
};

export default HomePage;
