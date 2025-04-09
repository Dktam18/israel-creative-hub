import React, { useState, useEffect } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ShareButtons } from "./Sharebuttons"
import { FaArrowUp } from "react-icons/fa" // 👈 Import scroll-up icon

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Fake loading for 1.5s to simulate real loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show button after scrolling 200px down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Header />

      {/* Spinner */}
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent'></div>
        </div>
      ) : (
        <>
          <main>{children}</main>
          <ShareButtons />
          <Footer />

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className='fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50'
              aria-label='Scroll to top'
            >
              <FaArrowUp />
            </button>
          )}
        </>
      )}
    </>
  )
}
