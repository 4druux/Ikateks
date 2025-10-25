import { ElementType } from "react";
import { services as staticServiceData } from "../../data/services";
import { useTranslation } from "react-i18next";

interface ServiceItemProps {
  text: string;
  icon: ElementType;
}

const ServiceItem = ({ text, icon: Icon }: ServiceItemProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-red-50 p-3 w-fit">
        <Icon className="h-8 w-8 text-red-900" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-medium text-zinc-800">{text}</h3>
    </div>
  </div>
);

const ExpertiseList = () => {
  const { t } = useTranslation(["services", "about"]);

  return (
    <div>
      <div className="text-left lg:text-center mb-6 lg:mb-12">
        <h1 className="roboto-medium text-2xl md:text-3xl font-extrabold max-w-4xl mx-auto uppercase text-zinc-800">
          {t("about:aboutPage.expertiseList.headline")}{" "}
          <span className="roboto-medium text-red-900 font-extrabold">
            {t("about:aboutPage.expertiseList.headline-span")}
          </span>
        </h1>
        <p className="text-lg text-zinc-600 lg:max-w-2xl lg:mx-auto">
          {t("about:aboutPage.expertiseList.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {staticServiceData.map((item) => (
          <ServiceItem
            key={item.id}
            text={t(`services:services.${item.i18nKey}.title`)}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseList;
