import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteCardItem, increaseQty } from '../redux/ProductSlide';

function Cardproduct({name,image,category,qty,total,price,id}) {

    const dispatch=useDispatch();

 
 
    return (
    <div className='bg-slate-200 p-2 flex gap-4  rounded  border-2 border-slate-200 '>
    <div className=' bg-white rounded overflow-hidden p-3   '>
        <img src={image} alt="" className='h-28   w-36  object-cover' />
        
        </div> 
        <div className='flex flex-col gap-1 w-full'>
            <div className=' flex justify-between'>
       <h3 className='font-semibold text-slate-500  capitalize text-lg md:text-xl'>{name}</h3>
       <div className='cursor-pointer text-slate-700 hover:text-red-500' onClick={() => dispatch(deleteCardItem(id))}>
      <MdDelete  />
      </div>
      </div>

    <p className=' text-slate-500 font-medium text-medium'>{category}</p>
    <p className=' font-bold  text-medium '> <span className='text-red-500'>₹</span><span>{price}</span></p>
 <div className='flex justify-between w-full'>
   <div className=' flex gap-4 items-center'>
   <button className=' bg-slate-300  mt-2 rounded hover:bg-slate-400  text-2xl  p-2 ' onClick={()=>dispatch(increaseQty(id))}><FaPlus />
</button>
<p className='font-semibold  p-1'>{qty}</p>
   <button className =' bg-slate-300  mt-2 rounded hover:bg-slate-400 p-2  ' onClick={()=>dispatch(decreaseQty(id))}><TiMinus /></button>

   </div>
   <div className='flex  items-center gap-2 font-bold text-slate-700'>
<p>Total </p>
<p><span className='text-red-500'>₹</span>{total}</p>
   </div>
   </div>
       </div> 
    </div>
  )
}

export default Cardproduct

