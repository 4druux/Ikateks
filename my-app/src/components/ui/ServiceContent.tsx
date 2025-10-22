import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { type TranslatedServiceItem } from "../../data/services";

interface ServiceContentProps {
  services: TranslatedServiceItem[];
  showViewAllButton?: boolean;
  onServiceClick: (item: TranslatedServiceItem) => void;
}

const ServiceContent = ({
  services,
  showViewAllButton = false,
  onServiceClick,
}: ServiceContentProps) => {
  const { t } = useTranslation("services");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onServiceClick(item)}
              className="group relative cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 rounded-xl bg-red-900 opacity-0 transition-all duration-300 ease-in-out group-hover:rotate-3 group-hover:opacity-100"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                }}
              />
              <div className="relative z-10 flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300">
                <div className="mb-4 flex-shrink-0 rounded-lg bg-red-50 p-3 w-fit">
                  <Icon className="h-8 w-8 text-red-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-zinc-800">
                  {item.title}
                </h3>
                <p className="mt-2 flex-grow text-zinc-600 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <span className="text-sm font-semibold text-red-900">
                    {t("services.learnMore")}
                  </span>
                  <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-900" />
                </div>
              </div>
            </div>
          );
        })}
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
    </>
  );
};

export default ServiceContent;
