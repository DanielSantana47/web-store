import { products } from "@/data/products"
import {Card} from "@/components/ui/card"
import { Button } from "../ui/button"
import { PopUp } from "./popUp"
import { Product } from "@/types/product"

type Props = {
    item: Product
}
  
export const ProductCard = ({item}: Props)=> {
    return(
        <Card key={item.id} className="w-auto h-full p-4 group bg-background">
            
            <img className="w-full h-200px sm:h-[300px] object-contain group-hover:scale-110 transition-all duration-700" src={item.image} alt="" />
            <div className="flex  flex-col justify-between gap-6">
                <p className="text-2xl pt-6">{item.name}</p>
                <p>${item.price},00</p>
                <PopUp item={item} title='Added to cart' description={item.name}/>
            </div>
        </Card>
    )
}