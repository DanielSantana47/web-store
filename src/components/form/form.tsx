"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Progress } from "../ui/progress"
import { Payment } from "./payment"
import { CheckCircleIcon } from "lucide-react"
import {z} from "zod"
import { Email } from "./email"
import { Adress } from "./adress"
import { useStore } from "../store/cart-store"



export function PaymentForm() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')
  let progress = 0

  switch(count) {
    case 1:
      progress = 25
      break;
    case 2:
      progress = 50
      break;
    case 3:
      progress = 75
      break;
    case 4:
      progress = 100
      break;
  }

  const formSchema = z.object({
    name: z.string().min(2, 'write a a minimum range of 2 caracters').max(50, 'write a a maximum range of 50 caracters'),
    email: z.string().email('write a correct email.'),
    message: z.string().min(3, 'write a minumum range of 3 caracters.')
  })

  
  const { cart, upsertCart } = useStore(state => state)
  
  const handleCloseFormButton = ()=> {
    for (let item of cart) {
      upsertCart(item.product, -Infinity)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto mt-4" disabled={cart.length <= 0}>Proceed to checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          {count == 1 && 
            <DialogTitle>Email</DialogTitle>
          }
          {count == 2 && 
            <DialogTitle>Adress</DialogTitle>
          }
          {count == 3 && 
            <DialogTitle>Payment method</DialogTitle>
          }
          {count == 4 && 
            <DialogTitle>Concluded</DialogTitle>
          }
          <Progress value={progress}/>
          
        </DialogHeader>
        {count === 1 &&
          <Email setCount={setCount}/>
        }
        {count === 2 &&
          <Adress setCount={setCount}/>
        }
        {count === 3 &&
        <>
        <div className="grid gap-4 py-4">
        <div className="grid  items-center gap-4">
          <Payment/>
        </div>
      </div>
      <DialogFooter>
      <button onClick={()=> {
              setCount(2)
              }} className="px-4 py-2 flex-1">
            Back
          </button>
        <Button onClick={()=> {
          setCount(4)
          }} className="flex-1 w-full" type="submit">Next</Button>
      </DialogFooter>
    </>
        }
        {count === 4 &&
        <div className="flex flex-col items-center">
          <CheckCircleIcon size={50}/>
          <p className="text-center mt-6">your products will arrive soon</p>
          <DialogClose className="w-full">
            <Button onClick={handleCloseFormButton} className="w-full mt-4" type="submit">Finish</Button>
          </DialogClose>
        </div>
        }
      </DialogContent>
    </Dialog>
  )
}