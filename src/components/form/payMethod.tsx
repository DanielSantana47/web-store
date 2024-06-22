import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"
import { Payment } from "./payment"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email({
    message: "email not valid",
  }),
})


type Props = {
  setCount: (n: number) => void
}

export const PayMethod = ({setCount}: Props)=> {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
      })
      
      const onSubmit =()=>{
        setCount(2)
      }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button className="flex-1 w-full" type="submit">Next</Button>
                </DialogFooter>
            </form>
        </Form>
    )
}