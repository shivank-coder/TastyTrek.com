


// import React from 'react'
// import { useParams } from 'react-router-dom';


// function Menu() {
// console.log(filterby);
//   return (
//     <div>
//       hello bro
//     </div>
//   )
// }

// export default Menu





import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Allproduct from '../components/Allproduct';
import { addCardItem } from '../redux/ProductSlide';

function Menu() {
  const { filterby } = useParams();
  console.log(filterby);
   const productData=useSelector((state)=>state.product.productlist
  
   );
   console.log(productData);

  // Check if productdata is defined and is an array before filtering
  const projectDisplay = Array.isArray(productData)
    ? productData.filter(el => el._id === filterby)[0]
    : [];
  console.log(projectDisplay);
  const dispatch=useDispatch();
  const handleAddcardproduct = (e) => {
    dispatch(addCardItem(projectDisplay))
  
    // Your other event handling logic here
  };

  return (
    
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto  md:flex bg-white '>
       <div className=' max-w-sm  overflow-hidden  w-full  p-5 '>
       <img src={projectDisplay.image} alt=""  className='hover:scale-105 transition-all h-full '/>
       </div>
       <div className='flex flex-col gap-1'>
       <h3 className='font-semibold text-slate-500  capitalize text-3xl md:text-4xl'>{projectDisplay.name}</h3>
    <p className=' text-slate-500 font-medium text-2xl'>{projectDisplay.category}</p>
    <p className=' font-bold md:text-2xl '> <span className='text-red-500'>₹</span><span>{projectDisplay.price}</span></p>
   <div className=' flex gap-4'>
   <button className='bg-yellow-500   mt-2 rounded hover:bg-yellow-400  min-w-[100px]  '>Buy</button>
   <button className ='bg-yellow-500   mt-2 rounded hover:bg-yellow-400 min-w-[100px]  ' onClick={handleAddcardproduct}>Add Card</button>

   </div>
   <div>
     <p>{projectDisplay.discription}</p>
   
   </div>
       </div>  
      </div>
      <Allproduct  heading={"Related Product"}/>
      
    </div>
  );
}

export default Menu;
