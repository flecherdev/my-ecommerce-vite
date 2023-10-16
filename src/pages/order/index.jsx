import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import OrderCard from '../../components/order-card'
import Layout from "../../components/layout";

const Order = () => {
  const context = useContext(ShoppingCartContext)
  console.log('order:', context.order)
  return (
    <Layout>
      Order
      <div className="flex flex-col w-80">
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}  
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default Order