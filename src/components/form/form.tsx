"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Progress } from "../ui/progress"
import { Payment } from "./payment"

export function Form() {
  const [count, setCount] = useState(1)
  const [progress, setProgress] = useState(25)
  const [name, setName] = useState('')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto mt-4">Finalizar compra</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          {count == 1 && 
            <DialogTitle>Dados pessoais</DialogTitle>
          }
          {count == 2 && 
            <DialogTitle>Endereço de entrega</DialogTitle>
          }
          {count == 3 && 
            <DialogTitle>Forma de pagamento</DialogTitle>
          }
          {count == 4 && 
            <DialogTitle>Envio para o WhatsApp</DialogTitle>
          }
          <Progress value={progress}/>
        </DialogHeader>
        {count === 1 &&
        <>
            <div className="grid gap-4 py-4">
            <div className="grid  items-center gap-4">
              <Label htmlFor="name" className="">
                Email
              </Label>
              <Input
                  id="name"
                  placeholder="Type your email"
                  className="col-span-3"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                  />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={()=> {
              setCount(2)
              setProgress(50)
              }} className="flex w-full" type="submit">Próximo</Button>
          </DialogFooter>
        </> 
        }
        {count === 2 &&
        <>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="grid  items-center gap-4">
                <Label htmlFor="country" className="">
                  Country
                </Label>
                <Input
                    id="country"
                    type=""
                    className="col-span-3"
                    />
              </div>
              <div className="grid  items-center gap-4">
                <Label htmlFor="city" className="">
                  City
                </Label>
                <Input
                    id="city"
                    className="col-span-3"
                    />
              </div>
              <div className="grid  items-center gap-4">
                <Label htmlFor="road" className="">
                  Road
                </Label>
                <Input
                    id="road"
                    className="col-span-3"
                    />
              </div>
              <div className="grid  items-center gap-4">
                <Label htmlFor="numero" className="">
                  Number
                </Label>
                <Input
                    id="numero"
                    className="col-span-3"
                    />
              </div>
              <div className="grid  items-center gap-4">
                <Label htmlFor="complemento" className="">
                  Complement
                </Label>
                <Input
                    id="complemento"
                    className="col-span-3"
                    />
              </div>
          </div>
          <div className="flex items-center justify-between w-ful">
          <button onClick={()=> {
              setCount(1)
              setProgress(25)
              }} className="px-4 py-2">
            voltar
          </button>
          <DialogFooter>
            <Button onClick={()=> {
              setCount(3)
              setProgress(75)
              }} className="flex w-full" type="submit">Próximo</Button>
          </DialogFooter>
          </div>
        </> 
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
              setProgress(50)
              }} className="px-4 py-2 flex-1">
            voltar
          </button>
        <Button onClick={()=> {
          setCount(4)
          setProgress(100)
          }} className="flex-1 w-full" type="submit">Próximo</Button>
      </DialogFooter>
    </>
        }
        {count === 4 &&
        <div className="flex flex-col items-center">
          <p>Perfeito <b>{name}</b></p>
          <p className="text-center mt-6">Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá guiar sobre o andamento do pedido</p>
          <Button  className="w-full mt-4" type="submit">Próximo</Button>
        </div>
        }
      </DialogContent>
    </Dialog>
  )
}