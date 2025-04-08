import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ShareButtons } from "./Sharebuttons"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ShareButtons />
      <Footer />
      
    </>
  )
}
