import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import Filterproduct from './Filterproduct';
import Cardfeature from './Cardfeature';
function Allproduct({heading}) {
    const productData=useSelector((state)=>state.product.productlist
  
  );

const categoryList=[...new Set(productData.map(el=>el.category))]
console.log(categoryList);

const [filterby,setfilterby]=useState("")
 
 const [datafilter,setdatafilter]=useState([])
 
useEffect(()=>{
  setdatafilter(productData);
},[productData])


const handlefilter=(category)=>{
const filter=productData.filter(e1=>e1.category.toLowerCase()===category.toLowerCase())
setdatafilter(()=>{
  return[
    ...filter
  ]
})
}

  return (
    <div>
      <div className='my-7'>
<h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>


<div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
  {
    categoryList[0] && categoryList.map(e1=>{
return(
  <Filterproduct category={e1} onClick={()=>handlefilter(e1)} />

)
    })
  }
  
</div>

<div className='flex flex-wrap justify-center gap-3 my-4' >
  {
    datafilter.map(e1=>{
      return(
     <Cardfeature 
     key={e1._id}
     id={e1._id}
     image={e1.image}
     name={e1.name}
     category={e1.category}
     price={e1.price}
     
     />



      )
    })
  }

</div>







</div>
    </div>
  )
}

export default Allproduct
