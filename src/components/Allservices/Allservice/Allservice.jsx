import React, { useEffect, useState } from 'react';
import Allservices from '../Allservices';

const Allservice = () => {
    const [allservice, setAllService] = useState([]);
useEffect(()=>{

      fetch('./data.JSON')
    .then(res=> res.json())
     .then(data => setAllService(data))

}, [])

    return (
        <div>
        <div>
          <h1 className="text-center text-4xl text-neutral-800 mt-5">
           Choose your Destination
          </h1>
          </div>
          <div className='bg-gray-bg-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
             {

                 allservice.map(spots => <Allservices
                 
                 key={spots.id}
                 spots={spots}

                 >



                 </Allservices>)
             }
            
          </div>
       
        
      </div>
    );
};

export default Allservice;