import { CartItemType } from "@/types/cartItemType"
import { Button } from "../ui/button"
import { useStore } from "../store/cart-store"

type Props = {
    item: CartItemType
}
export const CartItem = ({item}: Props)=> {
    const { upsertCart} = useStore(state => state)
    
    const handlePlusButton = ()=> {
        upsertCart(item.product, 1)
    }

    const handleMinusButton = ()=> {
        upsertCart(item.product, -1)
    }
 
    return(
        <div className="flex items-center justify-between">
            <div className="flex glex-col gap-2 sm:flex-row items-center">
                <img src={item.product.image} alt="" className="w-24"/>
                <div>
                    <p className="text-md sm:text-lg text-foreground">{item.product.name}</p>
                    <span>${item.product.price},00</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-md sm:text-lg">
                <Button onClick={handlePlusButton} variant={"ghost"} className="p-3 h-0 w-0">+</Button>
                <span className="text-foreground">{item.quantity}</span>
                <Button onClick={handleMinusButton} variant={"ghost"} className="p-3 h-0 w-0">-</Button>
            </div>
        </div>
    )
}