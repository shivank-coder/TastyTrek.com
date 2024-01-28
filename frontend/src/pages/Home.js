import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../components/HomeCard'
import {useSelector} from 'react-redux';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import Cardfeature from '../components/Cardfeature';
import Filterproduct from '../components/Filterproduct';
import Allproduct from '../components/Allproduct';
function Home() {
  const productData=useSelector((state)=>state.product.productlist
  
  );
  const slideref=useRef();

const nextproduct=()=>{

slideref.current.scrollLeft+=200;
}

const prevproduct=()=>{
  slideref.current.scrollLeft-=200;

}


const categoryList=[...new Set(productData.map(el=>el.category))]
// console.log(categoryList);



  // console.log(productData);
  const homevegitable=productData.filter(e1=>e1.category==='vegitable',[])
// console.log(homevegitable);
 const homeProductList = Array.isArray(productData) ? productData.slice(0, 4) : [];
  //  console.log("homeproductlist"+homeProductList);
 
 
 
 

  return (
    <div className='p-2 md:4'>
<div className='  md:flex gap-4 py-2'>
<div className='md:w-1/2 py-4'>
  <div className='flex gap-3 bg-slate-400 w-36 px-2  items-center rounded-full'>
<p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
<img src="data:image/png;base64,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" alt=""  className='h-7'/>
  </div>
  
  <h2 className='text-4xl md:text-7xl font-bold'>the Fastest Delivery in <span className='text-red-700'>Home</span></h2>
<p className='py-3 text-base max-w-lg'>your ultimate culinary destination where taste meets inspiration! Immerse yourself in a world of gastronomic delights as we bring you a symphony of flavors, textures, and aromas from around the globe. Our food website is a haven for food enthusiasts, home cooks, and anyone passionate about the art of cooking and savoring delicious meals.</p>
<button className='text-bold bg-red-500 text-slate-200 px-4 py-1 rounded-md'>Order Now</button>
</div>
<div className='md:w-1/2  flex flex-wrap gap-5 p-4 justify-center'>
  {
  homeProductList[0] && homeProductList.map(el =>{
      return(

     <HomeCard 
     key={el._id}
     id={el._id}
     image={el.image}
     name={el.name}
     price={el.price}
     category={el.category}
     
     /> 
      )
      })

    }
  
</div>

</div>
<div>
<div className='flex w-full items-center'>
  <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegitables</h2>
  <div className='ml-auto'>
    <button className='bg-slate-300 hover:bg-slate-400 text-lg p-1  rounded' onClick={ nextproduct}><GrNext />
</button>
<button className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded' onClick={prevproduct}><GrPrevious />
</button>
  </div>
  </div>
  <div className='flex gap-5  overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideref}>
 {
  homevegitable.map(e1=>{
    return(<Cardfeature
      key={e1._id}
      id={e1._id}
      name={e1.name}
      category={e1.category}
      price={e1.price}
      image={e1.image}
  
      />)
    
  })
 }
  </div>
</div>

<Allproduct  heading={"Your Product"}/>
    </div>
  )
}

export default Home
