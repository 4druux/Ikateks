import { useState, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import {
  services as staticServiceData,
  type TranslatedServiceItem,
} from "../../data/services";
import ModalService from "../ui/ModalService";
import ServiceContent from "../ui/ServiceContent";
import { useTranslation } from "react-i18next";

const Services = ({ lenis }: { lenis: Lenis | null }) => {
  const { t } = useTranslation("services");
  const [selectedService, setSelectedService] =
    useState<TranslatedServiceItem | null>(null);
  const isModalOpen = !!selectedService;

  const translatedServices: TranslatedServiceItem[] = staticServiceData.map(
    (item) => {
      const translations = t(`services.${item.i18nKey}`, {
        returnObjects: true,
      }) as Omit<TranslatedServiceItem, "id" | "icon" | "i18nKey">;

      return {
        ...item,
        ...translations,
      };
    }
  );

  const handleOpenModal = (item: TranslatedServiceItem) => {
    setSelectedService(item);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, lenis]);

  return (
    <section className="mt-10 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-left lg:text-center">
          <h1 className="roboto-medium text-4xl md:text-6xl lg:text-8xl font-extrabold max-w-4xl mx-auto uppercase text-zinc-800">
            {t("services.headline")} <br />
            <span className="roboto-medium text-red-900 font-extrabold">
              {t("services.headline-span")}
            </span>
          </h1>
          <p className="text-2xl text-zinc-600 lg:max-w-2xl lg:mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="mt-6 md:mt-12">
          <ServiceContent
            services={translatedServices}
            onServiceClick={handleOpenModal}
          />
        </div>

        <AnimatePresence>
          {selectedService && (
            <ModalService item={selectedService} onClose={handleCloseModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
