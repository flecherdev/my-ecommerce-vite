import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import OrderCard from '../../components/order-card'
import Layout from "../../components/layout";

const Orders = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = () => {

  }
  return (
    <Layout>
      Orders
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
    </Layout>
  )
}

export default Orders