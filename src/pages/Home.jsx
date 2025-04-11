
import React from "react";
import heroImg from "../components/assets/images/hero.png";
// import heroImgback from "../components/assets/images/hero-shape-purple.png";
// import waec from "../components/assets/images/waec.jpg";
// import neco from "../components/assets/images/neco.jpg";
// import jamb from "../components/assets/images/jamb.jpg";

import { FiSearch } from "react-icons/fi";
// import { BsFillLightningChargeFill } from "react-icons/bs";
// import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import { Blog } from "./Blog";
import Flag from 'react-flagkit';
// export default () => <Flag country="NG" />;


export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      <Blog />
    </>
  );
};
export const HomeContent = () => {
  return (
    <>

    <style>
      
    </style>
    <head>
    <script defer src="https://cloud.umami.is/script.js" data-website-id="1a12b620-2baf-4935-8e21-defc1f7f8ce7"></script>
    </head>
      <section className="bg-secondary py-10 h-[92vh] md:h-full">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <div className="left w-1/2 text-black md:w-full">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Welcome to <br /> Israel Creative <br /> Hub
              </h1>
              <h2 className="text-lg mt-3">
              NO. 1 EDUCATIONAL FORUM IN NIGERIA<Flag country="NG" />
              </h2>
              <span className="text-[20px]">
               <b>Best platform for WAEC, JAMB and NECO students</b>
              </span>

              <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <input
                  type="search"
                  className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none "
                  placeholder="Search..."
                  autoComplete="on"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <FiSearch />
                  </button>
                </span>
              </div>
              <span className="text-[14px]">
                With us, your 9'As in WAEC and JAMB and 300+ JAMB score is guaranteed
              </span>
            </div>
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative heroImgblack">
               
                <div className="heroImg h-[90vh] w-full hero-responsive ">
                  <img
                    src={heroImg}
                    alt=""
                    className="h-full w-full object-contain z-20 relative hero-img m-top=8"
                  />
                </div>
              </div>
              <div className="content">
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
