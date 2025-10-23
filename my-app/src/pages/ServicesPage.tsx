import Lenis from "lenis";
import Hero from "../components/ui/Hero";
import Services from "../components/services/Services";
import CallToAction from "../components/ui/CallToAction";
import { useTranslation } from "react-i18next";

interface ServicesProps {
  lenis: Lenis | null;
}

const ServicesPage = ({ lenis }: ServicesProps) => {
  const { t } = useTranslation("services");
  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero
        imageSrc="/images/office-4.jpg"
        title={t("servicesPage.hero.title")}
        description={t("servicesPage.hero.description")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-10 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28">
        <Services lenis={lenis} />
      </div>

      <CallToAction
        title={t("servicesPage.cta.title")}
        linkText={t("servicesPage.cta.linkText")}
      />
    </div>
  );
};

export default ServicesPage;
