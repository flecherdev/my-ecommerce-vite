import { useContext } from "react";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../components/order-card'
import Layout from "../../components/layout";

const Order = () => {
  const context = useContext(ShoppingCartContext);
  const params = useParams();
  const filterOrder = () => {
      return params.id ? context.order.filter(order => order.id === params.id)[0].products : context.order?.slice(-1)[0].products;
  }
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-5">
        <Link to={'/orders'} className="absoloute left-0">
          <ChevronLeftIcon className="h-6 w-6 ext-black cursor-pointer"/>
        </Link>
        <h1>Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {  filterOrder().map(product => (
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

export default Order;
