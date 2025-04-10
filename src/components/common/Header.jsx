import React, { useState } from "react"
import LogoImg from "../assets/images/logo-black.jpg"
import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
// import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { FiBell } from "react-icons/fi"

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Welcome to Israel Creative Hub!", link: "#" },
    { text: "You can now practice for the 'LEKKI HEADMASTER'.", link: "/practice" },
    { text: "New questions have been added to the CBT. Check them out!", link: "/practice" },
  ])
  const [hasUnread, setHasUnread] = useState(true)

  const handleClick = () => {
    alert("Not available yet!")
  }

  const handleBellClick = () => {
    setShowNotifications(!showNotifications)
    if (!showNotifications) {
      setHasUnread(false) // mark as read when dropdown opens
    }
  }

  const addMessage = (text, link = "#") => {
    setMessages(prev => [...prev, { text, link }])
    setHasUnread(true)
  }

  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          {/* Logo and title */}
          <div className='logo flex items-center gap-6'>
            <img src={LogoImg} alt='logo' className='h-10' />
            <div className='category flex items-center text-sm gap-3'>
              <span>Israel Creative Hub</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-sm" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className='account flex items-center gap-5 relative'>
            {/* Notification Bell */}
            <div className='relative'>
              <button
                onClick={handleBellClick}
                className='relative'
              >
                <FiBell size={22} />
                {hasUnread && messages.length > 0 && (
                  <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[10px] px-[5px]'>
                    {messages.length}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className='absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                  <ul className='text-sm p-2 max-h-60 overflow-y-auto'>
                    {messages.map((msg, index) => (
                      <li key={index} className='border-b last:border-none hover:bg-gray-100 transition'>
                        <NavLink
                          to={msg.link}
                          className='block p-2 text-sm text-gray-800 hover:text-primary'
                          onClick={() => setShowNotifications(false)}
                        >
                          {msg.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            
            {/* <NavLink to='#'>
              <button>
                <BiShoppingBag size={25} />
              </button>
            </NavLink> */}

            {/* Login */}
            <button id='btnnn' onClick={handleClick}>
              Login
            </button>

            {/* Hamburger */}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
