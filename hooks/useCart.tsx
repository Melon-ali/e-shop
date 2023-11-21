import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState} from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number,
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFormCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props{
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(10);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null >(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)

        setCartProducts(cProducts);
    }, []);

    const handleAddProductToCart = useCallback((product: CartProductType)=> {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product]
            }else{
                updatedCart = [product]
            }

            toast.success("Product Added To Cart")
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, []);

    const handleRemoveProductFormCart = useCallback((
        product: CartProductType
    ) => {
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            toast.success("Product removed")
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts));
        }
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFormCart,
    }

    return <CartContext.Provider value={value} {...props}/>
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(context === null) {
        throw new Error("useCart Must be used within a CartContextProvider")
    }

    return context;
}