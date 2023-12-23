import React, {useState} from 'react'

const CartWidget = () => {
    const [contador, setContador] = useState(0)


  return (
    <div className='CartWidget'>
        <i className="fa-solid fa-cart-shopping"> {contador}</i>
    </div>
  )
}

export default CartWidget
