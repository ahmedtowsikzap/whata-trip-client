import React from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LoginPage = () => {
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
        duration: 1.5,
      },
    },
  };
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <>
    <Navbar/>
      <motion.div 
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="h-screen flex bg-gray-bg6">
        <div className="w-full max-w-md m-auto b rounded-lg border border-primaryBorder shadow-default py-10 bg-red-100 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Log in/Sign in to your account 🔐
          </h1>
            <div></div>

            <div className="flex justify-center items-center mt-6">
              <button
                onClick={handleGoogleSignIn}
                className={`w-full flex items-center justify-center px-8 py-3  border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-fuchsia-600 hover:from-pink-400 hover:to-blue-600  md:py-4 md:text-lg md:px-10`}
              >
                Google Sign in
              </button>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;
