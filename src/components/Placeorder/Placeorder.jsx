import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import "./Placeorder.css";
import Navbar from '../Shared/Navbar';
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Placeorder = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
    const scrollReveal = {
      hidden: { opacity: 0, scale: 1.3, transition: { duration: 0.3 } },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
        },
      },
    };
    const scrollReveal2 = {
      hidden: { opacity: 0, scale: 1, transition: { duration: 0.4 } },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay:1.6
        },
      },
    };
    const { placeorderId } = useParams();
    const [placeorder, setPlaceorder] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${placeorderId}`)
            .then(res => res.json())
            .then(data => setPlaceorder(data))
    }, [])
    return (
        <>
        <Navbar/>
        <motion.div 
         
         variants={scrollReveal}
         animate={controls}
         initial="hidden"
         ref={element}
        className='grid mt-20 lg:grid-cols-1 md:grid-cols-1 justify-items-center sm:grid-cols-1'>
        <div className="max-w-sm bg-white rounded-lg  shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={placeorder.img} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{placeorder.name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${placeorder.price}</span>
        </div>
    </div>
</div>
        </motion.div>
           
<div className='text-center mt-10 font-semibold'><p>{placeorder.description}</p></div>

            <motion.div
             variants={scrollReveal2}
             animate={controls}
             initial="hidden"
             ref={element}
            className="add-service">
                <h2 className='my-5 text-center text-white'>Book now for Exclusive Deals and Offers!</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" defaultValue="" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <input placeholder="Zip Code" defaultValue="" {...register("zipcode")} />
                    <input placeholder=" Enter Coupon Code" defaultValue="" {...register("coupon")} />
                    <input type="submit" value="Book Now!" className="button hover:translate-y-1/3" />
                </form>
            </motion.div>
        </>
    );
};

export default Placeorder;