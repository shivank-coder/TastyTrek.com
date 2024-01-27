import React, { useState } from 'react'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import {ImagetoBase64} from '../utility/ImagetoBase64'


import loginimgae from '../assest/login-animation.gif';
import { Link } from 'react-router-dom';
// import Login from './Login';
function Signup() {
    const[showpassowrd,setshowpassowrd]=useState(false);
    const[showconfirmpassword,setshowconfirmpassword]=useState(false);

    const handleshowpassword=()=>{
        setshowpassowrd(prev =>!prev)
    }
    const handleshowconfirmpassword=()=>{
        setshowconfirmpassword(prev=>!prev);
    }
    
    const submithandler=(e)=>{
    e.preventDefault();
    }
 
    const [data,setdata]=useState({
        firstName:" ",
        lastName:" ",
        email:"",
        Password:"",
        confirmPassword:"",
        image:"",
    })

    const imageHandler = async (e) => {
        const file = e.target.files[0];
    
        if (file) {
            console.log(file);
            const data = await ImagetoBase64(file);
            console.log(data);
            
            setdata((prev) => {
                return {
                    ...prev,
                    image: data
                };
            });
        }
    };
    
      
    
    console.log(process.env.REACT_APP_SERVER_DOMAIN);
    const signuphandler = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        const { firstName, lastName, email, Password, confirmPassword } = data;
    
        if (firstName && lastName && email && Password && confirmPassword) {
            if (Password === confirmPassword) {
                try {
                    const fetchdata = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    });
                
                    const responseData = await fetchdata.json();
                    console.log(responseData);
                
                    if (fetchdata.ok) {
                        alert("Registration successful");
                    } else {
                        alert(`Registration failed: ${responseData.message}`);
                    }
                } catch (error) {
                    console.error("Fetch error:", error);
                
                    if (error instanceof Response) {
                        // The error is a Response object, which has a .text() method
                        console.log("Server response:", await error.text());
                    } else {
                        // Something else went wrong
                        console.log("Error message:", error.message);
                    }
                
                    alert("Failed to fetch. Please check the console for details.");
                }
                
            } else {
                alert("Password and confirm password do not match");
            }
        } else {
            alert("Please fill in all fields");
        }
    };
    

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
<div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative'>
<img src={ data.image ? data.image:loginimgae}  alt='imag' className='w-full h-full'/>

<label htmlFor="profileImage">
<div className='absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer'>
    <p className='text-sm p-1 text-white ' >Upload</p>
</div>
<input type={'file'} id='profileImage'  accept='image/*'className='hidden' onClick={imageHandler} />

</label>
</div>
<form className='w-full py-3 flex flex-col ' onClick={submithandler}>
<label htmlFor="firstName">First Name</label>

<input type="text" id='firstName' name='firstName' className='mt-1  mb-3 w-full  bg-slate-200 rounded focus-within:outline-blue-300'  value={data.firstNames}  onChange={changehandler} />
<label htmlFor="lastName">Last  Name</label>
<input type="text" id='lastName' name='lastName' className='mt-1  mb-2 w-full  bg-slate-200 rounded  focus-within:outline-blue-300 ' value={data.lastName}  onChange={changehandler}  />

<label htmlFor="email">Email</label>
<input type="email" id='email' name='email' className='mt-1  mb- w-full  bg-slate-200 rounded focus-within:outline-blue-300' value={data.email}  onChange={changehandler} />
<label htmlFor="Password">Password</label>
<div className='flex px-2 py-1  bg-slate-200 mt-1  mb-2 '>
<input type={showpassowrd? "text": "Password"} id='Password' name='Password' className=' w-full  focus-within:outline-blue-300' value={data.Password}   onChange={changehandler}/>

<span className='flex flex-xl cursor-pointer ' onClick={handleshowpassword}>{ showpassowrd ? <BiHide />: <BiShow />}</span>



</div>
<label htmlFor="confirmPassword">confirm Password</label>

<div className='flex px-2 py-1  bg-slate-200 mt-1  mb-2 '>
<input type={showconfirmpassword? "text": "Password"} id='confirmPassword' name='confirmPassword' className=' w-full  focus-within:outline-blue-300' value={data.confirmPassword}  onChange={changehandler} />

<span className='flex flex-xl  cursor-pointer' onClick={handleshowconfirmpassword}>{ showconfirmpassword ? <BiHide />: <BiShow />}</span>



</div>

<button  className='w-full max-w-[150px] m-auto bg-red-600 hover:bg-red-600 cursor-pointer text-white text-xl   font-medium text-center py-1  rounded-full mt-4' onClick={signuphandler}>Sign up</button>
</form>
<p>Already have account? <Link to={"/login"} className='text-red-600'>Login</Link></p>
     </div>
    </div>
  )
}

export default Signup
