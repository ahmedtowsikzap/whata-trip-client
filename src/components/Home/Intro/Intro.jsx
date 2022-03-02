import React from "react";
import { Popover } from "@headlessui/react";
import girloncar from "../../../Assets/images/girl.jpg";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.7 },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.9,
      },
    },
  };
  const scrollReveal2 = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.7 },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.1,
      },
    },
  };
  return (
    <div className="relative bg-white overflow-hidden mt-36">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              variants={scrollReveal2}
              animate={controls}
              initial="hidden"
              ref={element}
              // whileHover={{
              //   y: 25,
              //   scale: 1,
              // }}
              className="sm:text-center lg:text-left"
            >
              <motion.h1
                whileHover={{
                  y: -25,
                }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl ml-10 md:text-5xl"
              >
                <span className="block xl:inline">Check our</span>{" "}
                <span className="block text-orange-400 xl:inline">
                  Special Packages
                </span>
              </motion.h1>
              <p className=" text-base mx-20 text-grey- sm:mt-5 sm:text-sm  sm:max-w-xl md:mt-5 md:text-xl  lg:mx-0">
                For Exclusive offers & deals we are always dedicated for you to
                get the best experiance!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.5 }}
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3  border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-fuchsia-600 hover:from-pink-700 hover:to-yellow-600  md:py-4 md:text-lg md:px-10"
                  >
                    Start Booking!
                  </motion.a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3"></div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <motion.div
        whileHover={{
          y: -25,
          scale: 1,
        }}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={girloncar}
          alt="/"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
