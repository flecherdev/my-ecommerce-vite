import { useState, createContext } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0);
  console.log('COUNT', count)
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}> 
      {children}
    </ShoppingCartContext.Provider>
  )
}