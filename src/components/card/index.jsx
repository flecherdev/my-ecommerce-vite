import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusCircleIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)
  const { price, images, title, category } = data.data;
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  const addProductToCard = (event, product) => {
    event.stopPropagation();
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.openCheckOutSideMenu()
  }
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    if (isInCart) {   
      return (
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white/75 w-7 h-7 rounded-full m-2 p-1 text-green-800">
          <CheckIcon className="w-6 h-6"/>
        </div>
      )
    } else{
      return (
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white/75 w-7 h-7 rounded-full m-2 p-1 text-black/40"
          onClick={(event) => addProductToCard(event, data.data)}>
          <PlusCircleIcon className="w-6 h-6"/>
        </div>
      )
    }
  }
  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between text-black ">
        <span className="text-xs font-light px-3">{title}</span>
        <span className="text-lg font-medium px-2">${price}</span>
      </p>
    </div>
  )
}

export default Card