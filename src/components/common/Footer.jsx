import React from "react";
import logImg from "../assets/images/logo-black.jpg";
// import { BsApple, BsGooglePlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons' 


export const Footer = () => {
  return (
    <>
    
      <section className="app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-primary mt-16 relative z-10">
        <div className="left w-[60%] md:w-full p-10">
          <h1 className="text-4xl font-semibold leading-tight">
            Continue learning by <br /> joining us on all social media platforms.
          </h1>
          <div class="social-icons" style={{}} >
          <SocialIcon url="https://www.facebook.com/profile.php?id=61571040717545&mibextid=ZbWKwL" network="facebook" style={{ height: 50, width: 50,}} target="blank" class='social-icons' />
          <SocialIcon url="https://x.com/IsraelHub71817" network="x" style={{ height: 50, width: 50, }} target="blank" class='social-icons'/>
          <SocialIcon url="https://youtube.com/@israelcreativehub?si=qoL4mVNnimQDftTj" network="youtube" style={{ height: 50, width: 50, }} target="blank" class='social-icons'/>
          <SocialIcon url="https://whatsapp.com/channel/0029VajOfp62UPBOfXpold3b" network="whatsapp" style={{ height: 50, width: 50, }} target="blank" class='social-icons'/>
          <SocialIcon url="https://t.me/icreativeh" network="telegram" style={{ height: 50, width: 50, }} target="blank" class='social-icons'/>
          {/* <SocialIcon url="israelcreativehub@gmail.com" network="share" style={{ height: 50, width: 50, }} class='social-icons'/> */}
          </div>
          </div>
        <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#FF7C54] md:bg-transparent md:p-8">
          {/* <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm">
            <BsApple />
            <label className="text-sm">App Store</label>
          </div>
          <div className="box flex gap-2 items-center px-5 py-3 bg-white text-black shadow-shadow1 rounded-sm">
            <BsGooglePlay />
            <label className="text-sm">Play Store</label>
          </div> */}
        </div>
      </section>
      <footer className="bg-[#F3F4F8] py-10 pt-32 -mt-24">
        <div className="container grid grid-cols-4 gap-5 md:grid-cols-2">
          <div className="logo">
            <img src={logImg} alt="logImg" className="h-7" />
            <span className="text-[14px]">
            At Israel Creative Hub, we believe that education is the key to success. We are committed to providing the best educational resources to help you achieve your goals and ace all your exams.
            </span>
          </div>

          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Quick Links</h4>
            <NavLink to="../contact" className=" text-[14px] block mb-2 ">
              Contact
            </NavLink>
            {/* <NavLink to="#" className=" text-[14px] block mb-2">
              Portfolio
            </NavLink> */}
            {/* <NavLink to="#" className=" text-[14px] block mb-2">
              Our team
            </NavLink> */}
            <NavLink to="#" className=" text-[14px] block mb-2">
              Register/Login
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              FAQ
            </NavLink>
            <NavLink to="../Blog" className=" text-[14px] block mb-2">
              Latest news
            </NavLink>
          </li>
          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Platform</h4>
            <NavLink to="../instructor" className=" text-[14px] block mb-2">
              Products/services
            </NavLink>
            <NavLink to="../Courses" className=" text-[14px] block mb-2">
              Lesson notes
            </NavLink>
          </li>
          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Subscribe</h4>
            <NavLink to="../About" className=" text-[14px] block mb-2">
              About us
            </NavLink>
            <NavLink to="./" className=" text-[14px] block mb-2">
              Contact
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Reviews
            </NavLink>
            <NavLink to="../Instructor" className=" text-[14px] block mb-2">
              Services
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  );
};
