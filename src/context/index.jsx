import { useState, createContext } from "react";

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
      closeCheckOutSideMenu
    }}> 
      {children}
    </ShoppingCartContext.Provider>
  )
}