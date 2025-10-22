import Hero from "../components/ui/Hero";
import AboutOne from "../components/about/AboutOne";
import AboutTwo from "../components/about/AboutTwo";
import ExpertiseList from "../components/about/ExpertiseList";
import Tagline from "../components/about/Tagline";
import WhyMeru from "../components/about/WhyMeru";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero
        imageSrc="/images/office-3.jpg"
        title={t("aboutPage.hero.title")}
        description={t("aboutPage.hero.description")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-40 space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32 2xl:space-y-40">
        <AboutOne />
        <ExpertiseList />
        <WhyMeru />
        <AboutTwo />
      </div>

      <Tagline />
    </div>
  );
};

export default AboutPage;
