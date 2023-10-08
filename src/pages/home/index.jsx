import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProduct();
  }, [])
  
  const getProduct = async() =>{
    try {
      const data  = await (await fetch('https://api.escuelajs.co/api/v1/products')).json()
      setItems(data)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => <Card key={item.id} data={item}/>)
        }
      </div>
    </Layout>
  )
}

export default Home