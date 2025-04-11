import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ShareButtons } from "./Sharebuttons";
import { FaArrowUp, FaArrowLeft } from "react-icons/fa";

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <>
          <main className="relative">
            {/* Go Back Button (only show when not on homepage) */}
            {!isHomePage && (
              <button
                onClick={handleGoBack}
                className="fixed bottom-48 left-6 p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition duration-300 z-50"
                aria-label="Go back"
              >
                <FaArrowLeft />
              </button>
            )}

            {children}
          </main>

          <ShareButtons />
          <Footer />

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-16 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          )}
        </>
      )}
    </>
  );
};
