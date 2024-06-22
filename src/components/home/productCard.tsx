import { products } from "@/data/products"
import {Card} from "@/components/ui/card"
import { Button } from "../ui/button"
import { PopUp } from "./popUp"

type Props = {
    id: number,
    image: string,
    name: string,
    price: number,
}
  
export const ProductCard = ({id,image,name,price}: Props)=> {
    return(
        <Card key={id} className="w-auto h-full p-4 group bg-background">
            
            <img className="w-full h-[300px] object-contain group-hover:scale-110 transition-all duration-700" src={image} alt="" />
            <div className="flex  flex-col justify-between gap-6">
                <p className="text-2xl pt-6">{name}</p>
                <p>${price},00</p>
                <PopUp title='Adicionado ao carrinho' description={name}/>
            </div>
        </Card>
    )
}