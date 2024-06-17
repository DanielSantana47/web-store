import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"


type Props = {
    title: string,
    description: string
}

export const PopUp = ({title, description}: Props) => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: title,
            description: description,
          })
        }}
      >
        Adicionar 
      </Button>
    )
  }
  