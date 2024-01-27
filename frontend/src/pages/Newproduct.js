import React, { useState } from 'react'
import { IoMdCloudUpload } from "react-icons/io";
import {ImagetoBase64} from '../utility/ImagetoBase64'
function Newproduct() {

  const [data,setdata]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:"",
  })

  
  
  const handleOnchange=(e)=>{
    const{name,value}=e.target;
    setdata((preve)=>{
return{
  ...preve,
  [name]:value
}

    })

  }


  const handleSubmit = async(e) => {
    e.preventDefault(); // Fix the typo here
    console.log(data);
    const {name,image,category,price}=data;
    if(name && image && category && price){
      const fetchdata = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const fetchres=await fetchdata.json();
    console.log(fetchres);

    
    }
    else 
    {
      alert("please fill all the entity");
    }
  
  }
  
  const uploadImage=async(e)=>{
    const file = e.target.files[0];
    
    if (file) {
        console.log(file);
        const data = await ImagetoBase64(file);
        console.log(data);
        
        setdata((preve)=>{
          return{
            ...preve,
            image:data
          }
        })
    }
  }
  return (
    <div className='p-4'>

<form className='m-auto w-full max-w-md   p-3 shadow flex  flex-col bg-white' onSubmit={handleSubmit}>

<label htmlFor="name">Name</label>
<input type={"text"}  name='name' className='bg-slate-200 p-1 my-1' onChange={handleOnchange}/>

<label htmlFor="category">category</label>

<select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnchange} >
<option value={"other"} >Select Category</option>

  <option value={"fruits"} >Fruits</option>
  <option value={"vegitable"} >Vegitable</option>
  <option value={"icecream"} >Icecream</option>
  <option value={"dosa"} >Dosa</option>
  <option value={"streetfood"} >StreetFood</option>
  <option  value={"chicken"}>Chicken</option>
  <option  value={"cake"}>Cake</option>




</select>

<label htmlFor="image">image
<div   className='h-40 w-full bg-slate-300 rounded flex items-center justify-center cursor-pointer'>
  {
    data.image?<img src={data.image} alt=""  className=' h-full '/>:<span className='text-8xl'><IoMdCloudUpload />
    </span>

  }

<input type="file"  name='image' accept='image/*' id='image'  onChange={uploadImage} className='hidden' />
</div>
</label>
<label htmlFor="price">Price</label>
<input type="text"   name='price' className='bg-slate-200 p-1 my-1' onChange={handleOnchange} />

<label htmlFor="description">description</label>
<textarea name="description" id="description" cols="10" rows="3"  className='bg-slate-200 p-1 my-1' onChange={handleOnchange}   ></textarea>



<button className='bg-slate-500 hover:bg-red-500 text-white text-lg font-medium my-2 drop-shadow'>Save</button>

</form>

    </div>
  )
}

export default Newproduct
