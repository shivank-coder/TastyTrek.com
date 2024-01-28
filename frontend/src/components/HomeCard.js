// HomeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomeCard({ name, category, image, price,id }) {
  return (
    <div className="bg-white shadow-md  p-2 rounded">
        <div className='w-40  min-h-[150px]'>

      <img src={image} alt={name} className="h-full w-full" />
    </div>
    <Link to={`/menu/${id}` } onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>

    <h3 className='font-semibold text-slate-500  capitalize'>{name}</h3>
    <p className=' text-slate-500 font-medium'>{category}</p>
    <p className=' font-bold'> <span className='text-red-500'>₹</span><span>{price}</span></p>
    </Link>
    </div>
  );
}

export default HomeCard;
