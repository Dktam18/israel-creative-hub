import React from "react";
// import { courses } from "../components/assets/data/dummydata";
import { AiTwotoneCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Blog = () => {
  return (
    <>
      <section className="courses">
        <div className="w-4/5 m-auto">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Check out some <br />
              latest news
            </h1>
            <span className="text-sm mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-1">
            <div className="box rounded-lg shadow-shadow1 bg-white">
              <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
              
                <img
                  src={{}}
                  alt=""
                  
                  className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                />
              </div>
              <div className="text p-3">
                <span className="text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                  Education
                </span>
                <NavLink to="/single-blog">
                  <h3 className="text-black my-4 font-medium h-10">....Read more</h3>
                </NavLink>
                <div className="user flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="rounded-full w-7 h-7 object-cover shadow-shadow1"
                      src=""
                      alt=""
                    />
                    <span className="text-[14px] ml-2"> Israel Mrakpor</span>
                  </div>
                  <div className="flex items-center">
                    <AiTwotoneCalendar />
                    <span className="text-[14px] ml-2"> 7th April, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
