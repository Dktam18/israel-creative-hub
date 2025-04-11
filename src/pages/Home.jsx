import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import heroImg from "../components/assets/images/hero.png";
import Flag from 'react-flagkit';
import { BlogData, courses } from "../components/assets/data/dummydata";
// Removed unused import 'useNavigate'

export const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};

export const HomeContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState({
    blogs: BlogData,
    lessons: courses,
  });
  // const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredBlogs = BlogData.filter((blog) =>
      blog.title.toLowerCase().includes(term.toLowerCase()) ||
      blog.category.toLowerCase().includes(term.toLowerCase())
    );

    const filteredLessons = courses.filter((lesson) =>
      lesson.title.toLowerCase().includes(term.toLowerCase()) ||
      lesson.subject.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResults({
      blogs: filteredBlogs,
      lessons: filteredLessons,
    });
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredResults({
      blogs: BlogData,
      lessons: courses,
    });
  };

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  // Determine if we should show search results (only when there's a search term)
  const showSearchResults = searchTerm.trim() !== "";

  return (
    <>
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

              {/* Search Input */}
              <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <input
                  type="search"
                  className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none w-full"
                  placeholder="Search for blogs or lesson notes..."
                  value={searchTerm}
                  onChange={handleSearch}
                  autoComplete="on"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FiSearch className="text-gray-500" />
                </span>
                {/* {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                  >
                    <FiX />
                  </button>
                )} */}
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
            </div>
          </div>
        </div>
      </section>

  

      {/* Only show search results if there's a search term */}
      {showSearchResults && (
        <div className="filtered-blogs container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Search Results</h2>
            <button
              onClick={handleClearSearch}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FiX /> Clear Search
            </button>
          </div>

          {/* Render Filtered Blogs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Blogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredResults.blogs.length > 0 ? (
                filteredResults.blogs.map((item) => (
                  <div className="box rounded-lg shadow-lg bg-white" key={item.id}>
                    <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-t-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="text p-3">
                      <span className="text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                        {item.category}
                      </span>
                      <h3 className="text-black my-4 font-medium h-10">{item.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs found matching your search.</p>
              )}
            </div>
          </div>

          {/* Render Filtered Lesson Notes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Lesson Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredResults.lessons.length > 0 ? (
                filteredResults.lessons.map((item) => (
                  <div className="box rounded-lg shadow-lg bg-white" key={item.id}>
                    <div className="text p-3">
                      <span className="text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                        {item.subject}
                      </span>
                      <h3 className="text-black my-4 font-medium h-10">{item.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p>No lesson notes found matching your search.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};