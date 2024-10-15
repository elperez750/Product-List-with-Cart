import React from 'react'
import CartItem from './CartItem'
const Cart = () => {
  return (
    <div className="bg-white h-96 w-96 rounded-2xl">
      <h1 className="p-4 text-red-500">Your Cart (Number of items)</h1>

    {
      [1,2,3,4].map((__) => {
        return <CartItem mealName='Classic Tiramisu' quantity={2} price={1.50}/>

      })

    }
    </div>
  )
}

export default Cart
