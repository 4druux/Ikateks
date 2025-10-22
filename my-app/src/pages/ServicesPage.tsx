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
        imageSrc="/images/news/real-estate.jpg"
        title={t("servicesPage.hero.title")}
        description={t("servicesPage.hero.description")}
      />

      <Services lenis={lenis} />

      <CallToAction
        title={t("servicesPage.cta.title")}
        linkText={t("servicesPage.cta.linkText")}
      />
    </div>
  );
};

export default ServicesPage;
