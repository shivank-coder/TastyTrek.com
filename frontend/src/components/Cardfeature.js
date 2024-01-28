import React from 'react'
import { Link } from 'react-router-dom'
import { addCardItem } from '../redux/ProductSlide';
import { useDispatch } from 'react-redux';
function Cardfeature({image,name,price,category,id}) {
  const dispatch=useDispatch();
  const handleAddcardproduct = (e) => {
    dispatch(addCardItem({
_id: id,
name:name,
price:price,
category:category,
image:image,

    }


    ));
  
    // Your other event handling logic here
  };
  return (
    <div className='w-full min-w-[280px] max-w-[200px] bg-white hover:drop-shadow-lg  py-5   px-4 cursor-pointer flex flex-col'>
      <Link to={`/menu/${id}` } onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
      <div className='h-14 flex flex-col justify-center items-center'>
        <img src={image} alt=""  className='h-full '/>
      </div>
      <h3 className='font-semibold text-slate-500 text-center capitalize mt-4 whitespace-nowrap'>{name}</h3>
    <p className='text-center text-slate-500 font-medium'>{category}</p>
    <p className='text-center font-bold'> <span className='text-red-500'>₹</span><span>{price}</span></p>
    </Link>
    <button className='bg-yellow-500 py-1  mt-2-rounded hover:bg-yellow-400  w-full' onClick={handleAddcardproduct}>Add Card</button>
   
    </div>
    
  )
}

export default Cardfeature

