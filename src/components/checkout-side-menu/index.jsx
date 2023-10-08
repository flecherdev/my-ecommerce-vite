import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { XCircleIcon } from '@heroicons/react/24/solid';
import OrderCard from '../order-card'

import "./styles.css"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  console.log('CART: ', context.cartProducts)

  return (
    <aside 
      className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border-black bg-white/95 rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl text-black">Order</h2>
        <XCircleIcon 
          className='h-6 w-6 text-black cursor-pointer'
          onClick={() => context.closeCheckOutSideMenu()}
        />
      </div>
      {
        context.cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            title={product.title}  
            imageUrl={product.images}
            price={product.price}
          />
        ))
      }
    </aside>
  )
}

export default CheckoutSideMenu