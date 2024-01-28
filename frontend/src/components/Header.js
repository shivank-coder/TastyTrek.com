import React, { useState } from 'react';
import logo from '../assest/logo.png';
import logo1 from '../assest/logo1.png';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


function Header() {
const [showMenu,setshowMenu]=useState(false);

const handleShowmenu=()=>{
  setshowMenu(!showMenu);

}
const cardItemNumber=useSelector((state)=>state.product.cardItem);
// console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <div className='fixed shadow-md w-full h-16 px-2 md:px-4  z-50 bg-white' >
      <div className='  flex items-center h-full justify-between'> 
       <Link to={" "}>
       <div className='h-10'>
          <img src={logo1} alt=""  className='h-full'/>
        </div>
       </Link>
<div className='flex items-center gap-4 md:gap-7'>
  <nav className=' flex gap-4 md:gap-6  text-base md:text-lg  hidden md:flex'>
<Link to={""}>Home</Link>
<Link to={"menu"}>Menu</Link>
<Link to={"about"}>About</Link>
<Link to={"contact"}>Contact</Link>

  </nav>
  <div className='text-2xl relative'>
    <Link to={"card"}>
  <IoCartOutline />
  <div className='absolute -top-2  -right-1 text-white  bg-red-500 h-4  w-4  m-0  p-0  text-sm rounded-full text-center' >
{ cardItemNumber.length}
  </div>
  </Link>

  </div>
  <div className=' ' onClick={handleShowmenu}>
    <div className='text-3xl cursor-pointer  ' >
    <FaRegUserCircle  />
    </div>
    
    {
      showMenu && <div className='absolute right-2 bg-white py-2 px-2 shadow  drop-shadow-md flex flex-col  min-w-[120px] text-center'  >
              <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer '>Newproduct</Link>

      <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login
      </Link>
      <nav className=' flex gap-4 md:gap-6  text-base md:text-lg flex flex-col md:hidden '>
<Link to={""} className='px-2 py-1'>Home</Link>
<Link to={"menu"}  className='px-2 py-1' >Menu</Link>
<Link to={"about"} className='px-2 py-1'>About</Link>
<Link to={"contact"} className='px-2 py-1'>Contact</Link>

  </nav>
    </div>
  
    }
  </div>
</div>
      </div>
    </div>
  );
}

export default Header;
