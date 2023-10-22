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
  const [searchByCategory, setSearchByCategory] = useState(null)

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
    return items?.filter(item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filterdItemByCategory = (items, searchByCategory) => {
    return items?.filter(item => item?.category?.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filterdItemByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filterdItemByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterdItemByCategory(items, searchByCategory).filter(item => item?.title?.toLowerCase().includes(searchByTitle?.toLowerCase()));
    }

    if (!searchType) {
      return items;
    }

  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
    if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
    if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory])

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
      searchByCategory,
      setSearchByCategory,
      filteredItems,
      filterdItemByCategory
    }}> 
      {children}
    </ShoppingCartContext.Provider>
  )
}