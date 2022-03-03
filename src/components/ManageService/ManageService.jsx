import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';

const ManageService = () => {
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])
    return (
        <>
        <Navbar/>

        <h1 className='text-center text-4xl text-amber-400 font-serif mt-40'>Reserved Information</h1>
        
        <div className='grid mt-20 pt-50 lg:grid-cols-1 md:grid-cols-1 justify-items-center sm:grid-cols-1'>
            { orders.map(order =>  <div className="p-5 max-w-sm  rounded-lg bg-orange-400 border shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-white dark:text-white">Booking List</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold"></span>
            <span className="text-5xl font-extrabold tracking-tight"></span>
            <span className="ml-1 text-xl font-normal text-gray-100 dark:text-gray-400"></span>
        </div>
        
        <ul role="list" className="my-7 space-y-5">
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-100 dark:text-gray-400">Name: <span>{order.name}</span></span>
            </li>
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Next Trip: <span className='text-white'>{order.city}</span></span>
            </li>
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">City to Explore: <span className='text-green-600 underline font-extrabold'>{order.address}</span></span>
            </li>
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Zip Code : <span className='text-red-800 font-bold'>{order.zipcode}</span></span>
            </li>
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className="text-base font-normal leading-tight text-gray-100 dark:text-blue-500">My Number: <span className='text-black'>{order.phone}</span></span>
            </li>
            <li className="flex space-x-3">
               
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-blue-800">Coupon Code: <span className='text-purple-700'>{order.coupon}</span></span>
            </li>
            <li className="flex space-x-3">
             
                <svg className="flex-shrink-0 w-8 h-8 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className=" text-xl font-normal leading-tight text-green-600">Verified!</span>
            </li>
        </ul>
        
    </div>)}
        </div>
       
            
        </>
    );
};

export default ManageService;