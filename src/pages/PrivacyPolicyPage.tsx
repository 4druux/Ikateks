import Hero from "../components/ui/Hero";

import PrivacyPolicyContent from "../components/privacy/PrivacyPolicyContent";
import { useTranslation } from "react-i18next";
import Tagline from "../components/about/Tagline";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation("privacy");

  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero
        imageSrc="/images/privacy.jpg"
        title={t("privacyPage.hero.title")}
        description={t("privacyPage.hero.description")}
      />

      <PrivacyPolicyContent />

      <Tagline />
    </div>
  );
};

export default PrivacyPolicyPage;
