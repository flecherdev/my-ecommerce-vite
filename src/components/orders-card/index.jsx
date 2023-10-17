import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;
  return (
    <div className="flex justify-between mb-3 border text-white border-white rounded-lg p-4 w-80" >
      <p className="flex justify-between text-xs w-full">
        <div className="flex flex-col items-start">
          <span>{date.toLocaleString().split(',')[0]}</span>
          <span>{totalProducts} argicles</span>
        </div> 
        <div className="flex items-center gab-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 ml-3 text-white cursor-pointer' />
        </div>   
      </p>
    </div>
  )
}

export default OrdersCard