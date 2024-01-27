// HomeCard.js
import React from 'react';

function HomeCard({ name, category, image, price }) {
  return (
    <div className="bg-white shadow-md  p-2 rounded">
        <div className='w-40  min-h-[150px]'>
       
      <img src={image} alt={name} className="h-full w-full" />
    </div>
    <h3 className='font-semibold text-slate-500  capitalize'>{name}</h3>
    <p className=' text-slate-500 font-medium'>{category}</p>
    <p className=' font-bold'> <span className='text-red-500'>₹</span><span>{price}</span></p>
    </div>
  );
}

export default HomeCard;
