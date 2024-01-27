import React from 'react'

function Cardfeature({image,name,price,category}) {
  return (
    <div className='w-full min-w-[280px] max-w-[200px] bg-white hover:drop-shadow-lg  py-5   px-4 cursor-pointer flex flex-col'>
      <div className='h-28 flex flex-col justify-center items-center'>
        <img src={image} alt=""  className='h-full  '/>
      </div>
      <h3 className='font-semibold text-slate-500 text-center capitalize mt-4 whitespace-nowrap'>{name}</h3>
    <p className='text-center text-slate-500 font-medium'>{category}</p>
    <p className='text-center font-bold'> <span className='text-red-500'>₹</span><span>{price}</span></p>
    <button className='bg-yellow-500 py-1  mt-2-rounded '>Add Card</button>
    </div>
  )
}

export default Cardfeature

