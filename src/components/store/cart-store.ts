import { CartItemType } from "@/types/cartItemType";
import { Product } from "@/types/product";
import { create } from "zustand";


type States = {
    cart: CartItemType[]
}

type Actions = {
    upsertCart: (product: Product, quantity: number) => void
}

const initialData: States = {
    cart: []
}
export const useStore = create<States & Actions>()(set=> ({
    ...initialData,
    upsertCart: (product, quantity) => set(state => {
        let cartUpate = state.cart

        let productIndex = cartUpate.findIndex(item => item.product.id === product.id)

        if (productIndex < 0) {
            cartUpate.push({product, quantity: 0})
            productIndex = cartUpate.findIndex(item => item.product.id === product.id)
        }

        cartUpate[productIndex].quantity += quantity

        if (cartUpate[productIndex].quantity <= 0) {
            cartUpate = cartUpate.filter(item=> item.product.id !== product.id)
        }

        return {...state, cart: cartUpate}
    })
    
}))