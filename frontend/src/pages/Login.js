import React, { useState } from 'react'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

import { useNavigate } from 'react-router-dom';
import loginimgae from '../assest/login-animation.gif';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../redux/Userslice';
function Login() {
  const navigate=useNavigate();
  const[showpassowrd,setshowpassowrd]=useState(false);

  const handleshowpassword=()=>{
      setshowpassowrd(prev =>!prev)
  }
 
  
  const submithandler=(e)=>{
  e.preventDefault();
  }

  const [data,setdata]=useState({
     
      email:"",
      Password:"",
   
  })


const userData=useSelector(state=>state)
console.log(userData.user);

const dispatch=useDispatch()


const signuphandler=async()=>{
  const {email,Password}=data;
  
  if( email && Password)
  {
    const fetchdata = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  });

  const responseData = await fetchdata.json();
  console.log(responseData);
  
      setTimeout(()=>{
        dispatch(login(responseData));
        navigate("/")
      },100);
      console.log(userData)

  }


  else{
      alert("please fill valid entry")
  }
}

 const changehandler=(e)=>{
  const {name,value}=e.target;
  setdata((prev)=>{
  return{
      ...prev,
      [name]:value,
  }
  })


 }
 console.log(data);
  return (
    <div className='p-3 md:p-4'>
     <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
<div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
<img src={loginimgae} alt='loginimage'  className='w-full'/>
</div>
<form className='w-full py-3 flex flex-col ' onClick={submithandler}>



<label htmlFor="email">Email</label>
<input type="email" id='email' name='email' className='mt-1  mb- w-full  bg-slate-200 rounded focus-within:outline-blue-300' value={data.email}  onChange={changehandler} />
<label htmlFor="Password">Password</label>
<div className='flex px-2 py-1  bg-slate-200 mt-1  mb-2 '>
<input type={showpassowrd? "text": "Password"} id='Password' name='Password' className=' w-full  focus-within:outline-blue-300' value={data.Password}   onChange={changehandler}/>

<span className='flex flex-xl cursor-pointer ' onClick={handleshowpassword}>{ showpassowrd ? <BiHide />: <BiShow />}</span>



</div>


<button  className='w-full max-w-[150px] m-auto bg-red-600 hover:bg-red-600 cursor-pointer text-white text-xl   font-medium text-center py-1  rounded-full mt-4' onClick={signuphandler}>Login</button>
</form>
<p>New user? <Link to={"/signup"} className='text-red-600'>Sign up</Link></p>
     </div>
    </div>
  )
}

export default Login
