import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BlogData } from "../components/assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

export const Blog = () => {
  return (
    <section className="courses">
      <div className="w-4/5 m-auto">
        <div className="heading text-center py-12">
          <h1 className="text-3xl font-semibold text-black">
            Check out some <br />
            latest news
          </h1>
          <span className="text-sm mt-2 block">
            Stay abreast with current Educational happenings and trends in Nigeria and beyond.
          </span>
        </div>

        {/* Carousel for smaller screens */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.2} // You can adjust the number of cards visible at once
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            className="mySwiper"
          >
            {BlogData.map((item) => (
              <SwiperSlide key={item.id}>
                <NavLink to={item.to}>
                  <div className="box rounded-lg shadow-lg bg-white">
                    <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                      />
                    </div>
                    <div className="text p-3">
                      <span className="text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                        {item.category}
                      </span>
                      <h3 className="text-black my-4 font-medium h-4">{item.title}</h3>
                      <div className="user flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="rounded-full w-4 h-7 object-cover shadow-md"
                            src={item.authorImage}
                            alt={item.author}
                          />
                          <span className="text-[2px] ml-2">{item.author}</span>
                        </div>
                        <div className="flex items-center">
                          <AiTwotoneCalendar />
                          <span className="text-[1px] ml-2">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogData.map((item) => (
            <NavLink to={item.to} key={item.id}>
              <div className="box rounded-lg shadow-lg bg-white">
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                </div>
                <div className="text p-3">
                  <span className="text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                    {item.category}
                  </span>
                  <h3 className="text-black my-4 font-medium h-10">{item.title}</h3>
                  <div className="user flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="rounded-full w-7 h-7 object-cover shadow-md"
                        src={item.authorImage}
                        alt={item.author}
                      />
                      <span className="text-[14px] ml-2">{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <AiTwotoneCalendar />
                      <span className="text-[14px] ml-2">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};
