
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import Header from "./Header";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AnnouncementBar from "../layout/AnnouncementBar";
import ScrollToTop from "../common/ScrollToTop";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-blue-700 px-4 py-3 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      {/* <AnnouncementBar /> */}

      <Header />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}