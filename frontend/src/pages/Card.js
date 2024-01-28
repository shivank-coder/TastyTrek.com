import React from 'react'
import { useSelector } from 'react-redux'
import { addCardItem } from '../redux/ProductSlide';
import Cardproduct from '../components/Cardproduct';
import { loadStripe } from '@stripe/stripe-js';
function Card() {

   
    const productcard = useSelector((state) => state.product.cardItem);
console.log(productcard);
const totalprice=productcard.reduce((acc,curr)=>acc + parseInt(curr.total),0);
const totalquantity=productcard.reduce((acc,curr)=>acc + parseInt(curr.qty),0);



const handlepayment=async()=>{
    const stripePromise=await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(productcard)
    });
    
    if (res.statusCode === 500) return;
    alert("Are you ready to payment");
    const data = await res.json(); // Add await here
    console.log(data);   
     stripePromise.redirectToCheckout({sessionId:data})
}
  return (
    <div className='p-2  md:p-4  '>
    <h2 className='text-lg md:text-2xl font-bold text-slate-600 '>Your card Items</h2>
    <div className='my-4 flex gap-3'>
<div className='w-full max-w-3xl  '>

{
productcard.map(el =>{
    return(
        <Cardproduct 
        id={el._id}
        key={el._id} 
       
        name={el.name}
        price={el.price}
        image={el.image}
        category={el.category}
        qty={el.qty}
        total={el.total}

         />
    )
})

}
</div>

<div className='w-full  max-w-md  ml-auto'>
 <h2 className='bg-blue-500 text-white  p-2 text-lg'>summary</h2> 
<div className='flex w-full  py-2 text-lg border-b'>
<p>Total Qty :</p>  
<p className='ml-auto w-56 '>{ totalquantity}</p>
</div>
<div className='flex w-full  py-2 text-lg border-b'>
<p>Total Price</p>  
<p className='ml-auto w-56 '><span className='text-red-500'>₹</span>{totalprice}</p>
</div>
<button className='bg-red-500 w-full text-lg font-bold py-2 text-white hover:bg-green-500  ' onClick={handlepayment}>Payment</button>
</div>

</div>

    
    </div>
  )
}

export default Card
