import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import OrdersCard from '../../components/orders-card'
import Layout from "../../components/layout";

const Orders = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">Orders</h1>
      </div>
      <div className="px-5 overflow-auto">
        {
          context.order.map((order, index) => (
            <Link 
              to={`/orders/${order.id}`}
              key={index}
            > 
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}
                date={order.date}
              />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default Orders