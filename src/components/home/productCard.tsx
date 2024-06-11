import { products } from "@/data/products"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"

type Props = {
    id: number,
    image: string,
    name: string,
    price: number,
}
  
export const ProductCard = ({id,image,name,price}: Props)=> {
    return(
        <Card key={id} className="w-auto h-full p-4 group bg-background">
            
            <img className="w-full h-[300px] object-contain group-hover:scale-110 transition-all duration-300" src={image} alt="" />
            <div className="flex  flex-col justify-between gap-6">
                <p className="text-2xl pt-6">{name}</p>
                <p>${price},00</p>
                <Button className="w-full">Adicionar</Button>
            </div>
        </Card>
    )
}