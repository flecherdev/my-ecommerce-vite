import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import Layout from "../../components/layout";
import Card from "../../components/card";
import ProductDetail from "../../components/product-detail";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => <Card key={item.id} data={item}/>)
        )
      } else {
        return (
          <div>We don&rsquo;t have anything </div>
        )
      }
    } else {
      return (
        context.items?.map(item => <Card key={item.id} data={item}/>)
      )
    }
  }
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product"
        className="text-xl rounded-lg border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home