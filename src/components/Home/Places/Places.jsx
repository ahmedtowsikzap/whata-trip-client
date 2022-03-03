import React, { useEffect, useState } from 'react';
import Place from '../Place/Place'

const Places = () => {
const [placesto, setPlacesto] = useState([]);
useEffect(()=>{

fetch('http://localhost:5000/services')
.then(res=> res.json())
.then(data => setPlacesto(data))

}, [])

  return (
    <div>
      <div>
        <h1 className="text-center text-5xl text-cyan-300 my-20">
         Adventure Awaits
        </h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center my-20'>
           {

        placesto.map(service => placesto.indexOf(service) <3 && <Place
        key={service._id}
        service={service}
        > </Place>)
      }
          
        </div>
     
      
    </div>
  );
};

export default Places;
