import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BASE_TITLE = "PT Ikateks";

const TitleHeader = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    let pageTitleKey = "";
    switch (location.pathname) {
      case "/":
        pageTitleKey = "nav.home";
        break;
      case "/about":
        pageTitleKey = "nav.about";
        break;
      case "/products":
        pageTitleKey = "nav.products";
        break;
      case "/services":
        pageTitleKey = "nav.services";
        break;
      case "/news":
        pageTitleKey = "nav.news";
        break;
      case "/customer":
        pageTitleKey = "nav.customers";
        break;
      case "/contact":
        pageTitleKey = "nav.contact";
        break;
      default:
        pageTitleKey = "";
    }

    const translatedTitle = pageTitleKey ? t(pageTitleKey) : "";

    if (location.pathname === "/") {
      document.title = BASE_TITLE;
    } else if (translatedTitle) {
      document.title = `${translatedTitle} - ${BASE_TITLE}`;
    } else {
      document.title = BASE_TITLE;
    }
  }, [location.pathname, t]);

  return null;
};

export default TitleHeader;
