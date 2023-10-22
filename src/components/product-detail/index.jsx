import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { XCircleIcon } from '@heroicons/react/24/solid'

import "./styles.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border-black bg-white/95 rounded-lg`}>
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl text-black">Detail</h2>
        <XCircleIcon 
          className='h-6 w-6 text-black cursor-pointer'
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="px-6">
        <img 
          className="w-full h-full rounded-lg" 
          src={context.productToShow.images} 
          alt={context.productToShow.title} 
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // preven
            currentTarget.src="nophoto.png";
          }}
        />
      </figure>
      <p className="flex flex-col p-6 text-black">
        <span className="font-medium text2xl mb-2">${context.productToShow.price}</span>
        <span className="font-semibol text-sm">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail