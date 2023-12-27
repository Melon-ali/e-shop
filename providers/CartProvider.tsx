"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderProps{
    children: React.ReactNode
}

const CartProvider:React.FC<CartProviderProps> = ({children}) => {
  return (
    <CartContextProvider>{children}</CartContextProvider>
  )
}


/// hell o world

export default CartProvider