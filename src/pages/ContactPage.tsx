import Hero from "../components/ui/Hero";
import Tagline from "../components/about/Tagline";
import ContactContent from "../components/contact/ContactContent";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero
        imageSrc="/images/contact.jpg"
        title={t("contactPage.hero.title")}
        description={t("contactPage.hero.description")}
      />
      <ContactContent />
      <Tagline />
    </div>
  );
};

export default ContactPage;
