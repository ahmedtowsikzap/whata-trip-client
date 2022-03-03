import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import logo from "../../Assets/images/baggage.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-300 shadow-lg shadow-red-100 pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                <img className="h-12 w-12 mr-1" src={logo} alt="logo" />
              </motion.div>
              <motion.div
                className="hidden md:block flex-shrink-0 ml-3"
                initial={{ x: "-100vw" }}
                animate={{ x: 20 }}
                transition={{ delay: 1.3 }}
              >
                <h2 className="italic text-xl font-medium ">
                  <span className="underline decoration-fuchsia-500">What</span>
                  <span className="italic ml-1 text-2xl text-pink-800 font-medium">
                    A
                  </span>
                  <span className="text-2xl font-bold text-red-600">Trip!</span>
                </h2>
              </motion.div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/home">

                <a
                  className="text-pink-400 hover:bg-red-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                </Link>
                <Link to="/spots">
                <a
                  className="text-yellow-600 hover:bg-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Whereto?
                </a>

                </Link>
                <Link to="/login">
                <a
                  className="text-blue-400 hover:bg-purple-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>

                </Link>
                <Link to={'/Manageallbookings'} >
                <a
                  className="text-orange-400 hover:bg-red-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  All Bookings
                </a>
                </Link>
                {

               user.email ? <button className='btn b btn-outline-danger btn-rounded my-3 px-5' onClick={logOut}> Log out</button>
               :
               <p className='text-orange-700 underline decoration-amber-400' as={Link} to="/login">Sign in</p>

}
                <p className="w-15">
                {user.email && <a href="#login">{user.displayName} <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="dfdf" /></a>}

                </p>


                </div>
              </motion.div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-100"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/home">

              <a
                  className="text-orange-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

              </Link>
              <Link to="/spots">

              <a
                  className="text-orange-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Spots
                </a>

              </Link>

                <Link to={'/Manageallbookings'} >
                <a
                  className="text-orange-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  All Bookings
                </a>
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
