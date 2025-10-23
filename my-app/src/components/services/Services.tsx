import { useState, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import {
  services as staticServiceData,
  type TranslatedServiceItem,
  type StaticServiceItem,
} from "../../data/services";
import ModalService from "../ui/ModalService";
import ServiceContent from "../ui/ServiceContent";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  lenis: Lenis | null;
  limit?: number;
  showViewAllButton?: boolean;
}

const Services = ({
  lenis,
  limit,
  showViewAllButton = false,
}: ServicesProps) => {
  const { t } = useTranslation("services");
  const [selectedService, setSelectedService] =
    useState<TranslatedServiceItem | null>(null);
  const isModalOpen = !!selectedService;

  const translatedServices: TranslatedServiceItem[] = staticServiceData.map(
    (item: StaticServiceItem) => {
      const translations = t(`services.${item.i18nKey}`, {
        returnObjects: true,
      }) as Omit<TranslatedServiceItem, "id" | "icon" | "i18nKey">;

      return {
        ...item,
        ...translations,
      };
    }
  );

  const servicesToShow = limit
    ? translatedServices.slice(0, limit)
    : translatedServices;

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
    <div>
      <div className="text-left lg:text-center">
        <h1 className="roboto-medium text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto uppercase text-zinc-800">
          {t("services.headline")}{" "}
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
          services={servicesToShow}
          onServiceClick={handleOpenModal}
        />
      </div>

      {showViewAllButton && (
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="text-red-700 font-medium border px-4 py-3 border-red-800 hover:bg-red-800 hover:text-white transition-colors duration-300 inline-flex items-center group"
          >
            {t("services.viewAll")}
            <ArrowRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}

      <AnimatePresence>
        {selectedService && (
          <ModalService item={selectedService} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
