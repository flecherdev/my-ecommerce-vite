import { createContext } from "react";

const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
  return (
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}