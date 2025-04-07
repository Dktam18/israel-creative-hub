import React, { useState } from "react"
import LogoImg from "../assets/images/logo-black.jpg"
import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
// import { Login } from "../../pages/Login.jsx"

export const Header = () => {
  const [open, setOpen] = useState(false)

  // const btnRef = React.useRef(null);

  const handleClick = () => {
    alert("Not available yet!")
  }
  // React.useEffect(() => {
  //   const handleClick = () => {
  //     alert("Not available yet!");
  //   };

  //   const btnnn = btnRef.current;
  //   if (btnnn) {
  //     btnnn.addEventListener("click", handleClick);
  //   }

  //   return () => {
  //     if (btnnn) {
  //       btnnn.removeEventListener("click", handleClick);
  //     }
  //   };
  // }, []);
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-6'>
            <img src={LogoImg} alt='logo' className='h-10' />
            <div className='category flex items-center text-sm gap-3'>
              {/* <HiViewGrid size={20} /> */}
              <span>Israel Creative Hub</span>
            </div>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            <NavLink href="#">   

              {/* ../../pages/Login.jsx  */}
            <button>
              <BiShoppingBag size={25} />
            </button>
            </NavLink>
            {/* <NavLink to="Login"> */}
            <button id="btnnn" onClick={handleClick}>Login</button>{" "}
            {/* </NavLink> */}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
