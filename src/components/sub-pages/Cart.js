import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../ItemList'
import { clearCart } from '../../utils/cartSlice'
import { empty_cart } from '../../utils/constants'

const Cart = ({items}) => {
    const cartList = useSelector((store) => store.cart.items)
    console.log("dhdrh:",cartList)

    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearCart())
    }

    return cartList.length === 0 ? (

      <div className='empty cart flex justify-center'>
      <img className='h-64 w-64 mix-blend-multiply items-center  ' src={empty_cart} alt='empty cart' />
      
      </div>
      
  )

  : (
    <div className='flex flex-col  items-center m-4 p-4 '>
        <h1 className='text-5xl text-center font-serif mb-2'>Cart Page</h1>
        <button
            className='bg-slate-900 w-32 text-cyan-50 h-16 rounded-xl self-end font-semibold'
            onClick= {handleClearCart}
        >Clear Cart</button>
        <h3>Here are your orders:</h3>
        <div className='w-7/12 '>
          <ItemList items={cartList} />
        </div>
    </div>
  )
}

export default Cart