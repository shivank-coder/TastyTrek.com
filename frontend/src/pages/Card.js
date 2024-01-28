import React from 'react'
import { useSelector } from 'react-redux'
import { addCardItem } from '../redux/ProductSlide';
import Cardproduct from '../components/Cardproduct';

function Card() {

    const productcard = useSelector((state) => state.product.cardItem);
console.log(productcard);

  return (
    <div className='p-2  md:p-4'>
    <h2 className='text-lg md:text-2xl font-bold text-slate-600 '>Your card Items</h2>
    <div className=''>
<div className='w-full max-w-lg'>

{
productcard.map(el =>{
    return(
        <Cardproduct 
        key={el._id} 
        id={el.id}
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
</div>
<div className=''>
    
</div>

    
    </div>
  )
}

export default Card
