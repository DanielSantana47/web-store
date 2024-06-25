import { Product } from "@/types/product"
import { useStore } from "../store/cart-store"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"


type Props = {
    title: string,
    description: string,
    item: Product
}

export const PopUp = ({title, description, item}: Props) => {
    const { toast } = useToast()
    const { upsertCart } = useStore(state => state)

    const handleAddButton = ()=> {
        toast({
          title: title,
          description: description,
        })
        upsertCart(item, 1)
    }
  
    return (
      <Button
        onClick={handleAddButton}
      >
        Add to cart
      </Button>
    )
  }
  