import { ArrowUpRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-950 text-white -mt-1">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 md:pt-10 pb-8 xl:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-24">
          <div className="flex flex-col gap-4">
            <Link to="/" className="">
              <img
                src="/images/icp-footer.png"
                alt="Meru logo"
                className="h-14"
              />
            </Link>

            <p className="text-zinc-400 text-sm max-w-sm">
              {t("footer.description")}
            </p>
            <a
              href="/about"
              className="flex items-center gap-1 text-sky-700 hover:text-sky-600 transition duration-300 text-sm font-semibold hover:underline group"
            >
              {t("footer.moreAbout")}
              <span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out" />
              </span>
            </a>
          </div>

          <div className="block md:hidden border-t border-zinc-600 w-full" />

          <div className="md:hidden">
            <h4 className="font-semibold text-zinc-200 mb-4">
              {t("footer.followUs")}
            </h4>
            <div className="flex items-start gap-4">
              <a
                href="#"
                aria-label={t("footer.aria.facebook")}
                className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
              >
                <FaFacebook className="w-5 h-5 text-zinc-800" />
              </a>
              <a
                href="#"
                aria-label={t("footer.aria.instagram")}
                className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
              >
                <FaInstagram className="w-5 h-5 text-zinc-800" />
              </a>
              <a
                href="#"
                aria-label={t("footer.aria.x")}
                className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
              >
                <FaXTwitter className="w-5 h-5 text-zinc-800" />
              </a>
              <a
                href="#"
                aria-label={t("footer.aria.linkedin")}
                className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
              >
                <FaLinkedin className="w-5 h-5 text-zinc-800" />
              </a>
              <a
                href="#"
                aria-label={t("footer.aria.youtube")}
                className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
              >
                <FaYoutube className="w-5 h-5 text-zinc-800" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:col-span-3 gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-zinc-200 mb-2">
                {t("footer.headings.navigation")}
              </h4>
              <a
                href="/"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.home")}
              </a>
              <a
                href="/about"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.about")}
              </a>

              <a
                href="/products"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.products")}
              </a>
              <a
                href="/services"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.services")}
              </a>
              <a
                href="/news"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.news")}
              </a>
              <a
                href="/customers"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("nav.customers")}
              </a>
              <a
                href="/privacy-policy"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                {t("footer.links.privacy")}
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-zinc-200 mb-2">
                {t("footer.headings.contact")}
              </h4>
              <a
                href="https://api.whatsapp.com/send/?phone=62882211232801&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                +62 822 1123 2801
              </a>
              <a
                href="mailto:admin@ikateks.com"
                className="text-zinc-400 hover:text-white hover:underline hover:translate-x-1 transition duration-300 text-sm"
              >
                admin@ikateks.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-zinc-200">
                {t("footer.headings.location")}
              </h4>
              <a
                href="https://maps.app.goo.gl/y2mQ5rFuEFnDu9Zu9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white hover:underline text-sm not-italic"
              >
                Jl. Vila Dago Tol No.27-28 Blok A1, Serua, Kec. Ciputat, Kota
                Tangerang Selatan, Banten 15414
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-zinc-200 mb-2">
                  {t("footer.followUs")}
                </h4>

                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label={t("footer.aria.facebook")}
                    className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
                  >
                    <FaFacebook className="w-5 h-5 text-zinc-800" />
                  </a>
                  <a
                    href="#"
                    aria-label={t("footer.aria.instagram")}
                    className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
                  >
                    <FaInstagram className="w-5 h-5 text-zinc-800" />
                  </a>
                  <a
                    href="#"
                    aria-label={t("footer.aria.x")}
                    className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
                  >
                    <FaXTwitter className="w-5 h-5 text-zinc-800" />
                  </a>
                  <a
                    href="#"
                    aria-label={t("footer.aria.linkedin")}
                    className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
                  >
                    <FaLinkedin className="w-5 h-5 text-zinc-800" />
                  </a>
                  <a
                    href="#"
                    aria-label={t("footer.aria.youtube")}
                    className="p-2 bg-white hover:-translate-y-1 rounded-full transition duration-300"
                  >
                    <FaYoutube className="w-5 h-5 text-zinc-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:gap-10">
          <div className="border-t border-zinc-800 w-full" />

          <p className="text-sm text-center text-zinc-500">
            © {new Date().getFullYear()} Ikateks Citra Persada .{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
