import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";

function Cardproduct({id,name,image,category,qty,total,price}) {
  return (
    <div className='bg-slate-200 p-2 flex gap-4 '>
    <div className=' bg-white rounded overflow-hidden p-3  '>
        <img src={image} alt="" className='h-28   w-36  object-cover' />
        
        </div> 
        <div className='flex flex-col gap-1'>
       <h3 className='font-semibold text-slate-500  capitalize text-lg md:text-xl'>{name}</h3>
    <p className=' text-slate-500 font-medium text-medium'>{category}</p>
    <p className=' font-bold  text-medium '> <span className='text-red-500'>₹</span><span>{price}</span></p>
   <div className=' flex gap-4 items-center'>
   <button className=' bg-slate-300  mt-2 rounded hover:bg-slate-400  text-2xl  p-2  '><FaPlus />
</button>
<p className='font-semibold  p-1'>{qty}</p>
   <button className =' bg-slate-300  mt-2 rounded hover:bg-slate-400 p-2  '><TiMinus /></button>

   </div>
       </div> 
    </div>
  )
}

export default Cardproduct

