import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCartContext } from "../../context";
import { XCircleIcon } from '@heroicons/react/24/solid';
import { totalPrice } from "../../util";
import OrderCard from '../order-card'

import "./styles.css"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) =>{
    const filteredProducts  = context.cartProducts.filter(product => product.id != id);
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  }

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
      <div className="px-5 overflow-auto">
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}  
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="p-3">
        <p className="flex justify-between items-center text-black mb-2"> 
          <span className="font-semibold">Total:</span>
          <span className="font-medium text-2cl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to={'/orders/last'}>
          <button 
            className='bg-black py-3 text-white w-full rounded-lg' 
            onClick={() => handleCheckout()}>
              Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu