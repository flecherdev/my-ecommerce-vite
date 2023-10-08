import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { XCircleIcon } from '@heroicons/react/24/solid'

import "./styles.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border-black bg-white/95 rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl text-black">Detail</h2>
        <XCircleIcon 
          className='h-6 w-6 text-black'
          onClick={() => context.closeProductDetail()}
        />
      </div>
    </aside>
  )
}

export default ProductDetail