import { useState, createContext, useEffect } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
  // Shopping card icmrement
  const [count, setCount] = useState(0);
  // Detail open and close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  // Check outs id emenu open and close
  const [isCheckOutSideMenuOpen, setisCheckOutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setisCheckOutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setisCheckOutSideMenuOpen(false)
  // Product detail
  const [productToShow, setProductToShow] = useState({})
  // Shop card add products
  const [cartProducts, setCartProducts] = useState([])
  // Shop card order
  const [order, setOrder] = useState([])
  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null)
  // Get products by tilte
  const [searchByTitle, setSearchByTitle] = useState(null)

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

  const filterdItemByTitle = (items, searchByTitle) => {
    return items?.filter(item => item?.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filterdItemByTitle(items, searchByTitle)) 
  }, [items, searchByTitle])
  

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckOutSideMenuOpen,
      openCheckOutSideMenu,
      closeCheckOutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}> 
      {children}
    </ShoppingCartContext.Provider>
  )
}