import React, { useEffect, useState } from 'react';
import Place from '../Place/Place'

const Places = () => {
const [placesto, setPlacesto] = useState([]);
useEffect(()=>{

fetch('./data.JSON')
.then(res=> res.json())
.then(data => setPlacesto(data))

}, [])

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl text-neutral-800 mt-5">
         TO the Tour
        </h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
           {

        placesto.map(service => placesto.indexOf(service) <3 && <Place
        key={service.id}
        service={service}
        > </Place>)
      }
          
        </div>
     
      
    </div>
  );
};

export default Places;
