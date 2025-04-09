import React, { useState, useEffect } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ShareButtons } from "./Sharebuttons"

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fake loading for 1.5s to simulate real loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

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
        </>
      )}
    </>
  )
}
