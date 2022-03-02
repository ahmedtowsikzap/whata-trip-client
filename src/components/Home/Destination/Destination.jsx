import React from "react";
import "./Destination.css";
import maldive from "../../../Assets/images/maldives.jpg";
import greece from "../../../Assets/images/Greece.jpg";
import bali from "../../../Assets/images/bali.jpg";
import bali2 from "../../../Assets/images/bali2.jpg";
import france from "../../../Assets/images/france.jpg";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Destination = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h1 className="text-center text-5xl text-rose-400 mt-20">
        Inexclusive <br />
        <span className="underline decoration-orange-600 text-gray-600">
          Resorts
        </span>
      </h1>
      <p className="text-center mt-5">Still thinking? </p>

      <div class="md:px-12 lg:px-24">
        <div className="overflow-x-hidden -mx-4 md:mx-0">
          <div className="container m-auto py-8 overflow-x-auto">
            <div className="h-[60vh] w-[130vh] md:h-full md:w-full grid grid-cols-12 grid-rows-4 pl-8 pr-4 md:pl-0 md:pr-0 divide-x gap-4">
              <motion.div
                whileHover={{
                  x: 9,
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                className="col-span-4 row-span-4 md:col-span-8 lg:col-span-6 md:h-[25rem] lg:h-[31rem] px-2 py-6"
              >
                <img
                  src={bali}
                  alt="/"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{
                  x: 26,
                }}
                className="col-span-4 row-span-2 lg:col-span-3 lg:h-60 p-2 pt-6  rounded-bl-2xl"
              >
                <img
                  src={bali2}
                  alt="/"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{
                  x: 12,
                  scale: 0.9,
                }}
                className="col-span-4 row-span-2 lg:col-span-3 lg:h-60 p-2 pt-6 md:pt-2 lg:pt-6  rounded-bl-2xl md:rounded-tl-2xl"
              >
                <img
                  src={greece}
                  alt="/"
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                  scale: 1.1,
                }}
                className="col-span-5 row-span-2 md:col-span-7 lg:col-span-4 lg:h-60 p-2 pb-6  rounded-tl-2xl"
              >
                <img
                  src={france}
                  alt="/"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div 
               whileHover={{
                x: 9,
                scale: 1,
                transition: { duration: 0.1 },
              }}
              className="col-span-3 row-span-2 md:col-span-5 lg:col-span-2 lg:h-60 p-2 pb-6 rounded-tl-2xl">
                <img
                  src={maldive}
                  alt="/"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Destination;
