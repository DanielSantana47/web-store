"use client"

import { Button } from "../ui/button"
import { SiAlienware } from "react-icons/si";
import {
    Sheet,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "./cart";
import { useStore } from "../store/cart-store";

export const Nav = ()=> {
    const { cart } = useStore()

    let cartElements = 0
    for (let item of cart) {
        cartElements += item.quantity
    }

    return(
        <nav className="container fixed top-0 left-0 right-0 py-4 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl">Web Store</h1>
            </div>
            <Sheet>
                    <SheetTrigger asChild>
                            <Button className="flex gap-2 text-md relative">
                                <SiAlienware className="text-lg"/>
                                {cartElements > 0 &&
                                    <div className="w-4 h-4 flex items-center text-primary font-bold justify-center rounded-full bg-white absolute -top-1 -right-1 text-xs">{cartElements}</div>
                                }
                                Cart
                            </Button>
                    </SheetTrigger>
                
                <Menu/>
            </Sheet>
        </nav>
    )
}