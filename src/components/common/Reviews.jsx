import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Reviews = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const reviews = [
    {
      quote: "I am finally done with JAMB. The tutorials actually helped me alot especially the CBT.",
      name: "Prince Albert",
      title: "Student",
      image: "https://i.postimg.cc/L8tD9xv6/Untitled-design.png"
    },
    {
      quote: "I am in so many groups both the wrong ones and the right ones. I think this very one is the legit one because I do speak with someone from WAEC.",
      name: "Dove",
      title: "Student",
      image: "https://i.postimg.cc/L8tD9xv6/Untitled-design.png"
    },
    {
      quote: "Good morning Sir Israel. I just want to say thank you for your time during our WAEC period. I really appreciate.",
      name: "Grace",
      title: "Student",
      image: "https://i.postimg.cc/J4JvXcKS/Untitled-design-1.png"
    },
    {
      quote: "I am officially done with NECO. Thanks so much for your assistance.",
      name: "Prudence",
      title: "Student",
      image: "https://i.postimg.cc/J4JvXcKS/Untitled-design-1.png"
    },
    {
      quote: "You teach like a professional. I don't think I would regret joining your class.",
      name: "Anonymous",
      title: "Student",
      image: "https://i.postimg.cc/J4JvXcKS/Untitled-design-1.png"
    },
    {
      quote: "The class was very interesting. Thanks sir.",
      name: "Hadassah",
      title: "Student",
      image: "https://i.postimg.cc/J4JvXcKS/Untitled-design-1.png"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 sm:py-12 lg:py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-base md:text-lg font-medium text-gray-600 font-pj">
              Some persons have said how exceptional we are
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl font-pj">
              What our students say about us
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="relative mt-8 lg:mt-16 w-full">
            <div className="absolute -inset-x-1 inset-y-12 lg:-inset-x-2 lg:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(44, 9, 199) -0.55%, #44b0ff 22.86%, #8b44ff 48.36%,rgb(53, 6, 180) 73.33%,rgb(52, 6, 221) 99.34%)",
                }}
              ></div>
            </div>

            {/* Responsive Grid - 1 column on mobile, 3 on desktop */}
            <div className="relative grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:gap-8">
              {reviews.map((review, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <ReviewCard {...review} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center lg:mt-12"
          >
            <a
              href="#"
              className="inline-block pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Check all reviews
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ReviewCard = ({ quote, name, title, image }) => (
  <div className="flex flex-col h-full bg-white">
    <div className="flex flex-col justify-between flex-1 p-5 lg:p-6">
      <div className="flex-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB241]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="flex-1 mt-4">
          <p className="text-sm leading-relaxed text-gray-900 sm:text-base lg:text-lg font-pj">
            "{quote}"
          </p>
        </blockquote>
      </div>

      <div className="flex items-center mt-6">
        <img
          className="flex-shrink-0 object-cover rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={image}
          alt={`${name}'s profile`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/100";
          }}
        />
        <div className="ml-3">
          <p className="text-sm font-bold text-gray-900 sm:text-base font-pj">{name}</p>
          <p className="mt-0.5 text-xs sm:text-sm font-pj text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  </div>
);