import React from 'react'
import { useParams } from 'react-router-dom'

function Menu() {
const Idproduct=useParams();
console.log(Idproduct.filterby);

  return (
    <div>
      this is a menu page
    </div>
  )
}

export default Menu
