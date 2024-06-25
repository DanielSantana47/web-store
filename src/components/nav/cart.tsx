"use client"

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { PaymentForm } from "../form/form"
import { useStore } from "../store/cart-store"
import { CartItem } from "./cartItem"
  

export const Menu = ()=> {

    const { cart } = useStore(state => state)
    let subtotal = 0
    for (let item of cart) {
        subtotal += item.quantity * item.product.price
    }
    
    return(
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        {cart.map(item => (
                            <CartItem item={item}/>
                        ))}
                    </div>
                    <div className="flex item-center justify-between mt-4">
                        <span>subtotal</span>
                        <span>${subtotal},00</span>
                    </div>
                    <PaymentForm/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
    )
}

