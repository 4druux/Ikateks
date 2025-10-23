import Lenis from "lenis";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";
import News from "../components/news/News";
import { useTranslation } from "react-i18next";

const NewsPage = ({ lenis }: { lenis: Lenis | null }) => {
  const { t } = useTranslation("news");

  return (
    <div className="min-h-screen">
      <Hero
        imageSrc="/images/office-1.jpg"
        title={t("newsPage.hero.title")}
        description={t("newsPage.hero.description")}
      />

      <News lenis={lenis} />

      <CallToAction
        title={t("newsPage.cta.title")}
        linkText={t("newsPage.cta.linkText")}
      />
    </div>
  );
};

export default NewsPage;
