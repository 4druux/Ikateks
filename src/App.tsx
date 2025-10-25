import { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import "./i18n";
import TitleHeader from "./components/TitleHeader";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductCategoriesPage from "./pages/ProductCategoriesPage";
import ProductCategoryDetailPage from "./pages/ProductCategoryDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NewsPage from "./pages/NewsPage";
import ServicesPage from "./pages/ServicesPage";
import CustomerPage from "./pages/CustomerPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import LoadingProgressBar from "./components/LoadingProgressBar";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

interface ScrollLogicProps {
  lenis: Lenis | null;
}

const ScrollToTopLogic = ({ lenis }: ScrollLogicProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
};

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis();
    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <Suspense fallback={<LoadingProgressBar />}>
      <Router>
        <ScrollToTopLogic lenis={lenis} />
        <TitleHeader />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage lenis={lenis} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductCategoriesPage />} />
              <Route
                path="/products/:categorySlug"
                element={<ProductCategoryDetailPage />}
              />
              <Route
                path="/products/:categorySlug/:productSlug"
                element={<ProductDetailPage />}
              />
              <Route path="/news" element={<NewsPage lenis={lenis} />} />
              <Route
                path="/services"
                element={<ServicesPage lenis={lenis} />}
              />
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
