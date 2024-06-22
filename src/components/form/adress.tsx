"use client"

import { DialogFooter } from "../ui/dialog"
import { Label } from "../ui/label"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  country: z.string().min(3, {
    message: "Country must have more than 2 caracters",
  }),
  city: z.string().min(3, {
    message: "City must have more than 2 caracters",
  }),
  road: z.string().min(3, {
    message: "Road must have more than 2 caracters",
  }),
  number: z.string({
    message: "Number must have only numbers",
  }),
  complement: z.string().optional(),
})


type Props = {
  setCount: (n: number) => void
}


export const Adress = ({setCount}: Props)=> {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
      })
      
      const onSubmit =()=>{
        setCount(3)
      }

      const handlebackButton = ()=> {
        setCount(1)
      }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-4 py-4">
                <div className="grid  items-center gap-4">
                        <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                <div className="grid  items-center gap-4">
                        <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                <div className="grid  items-center gap-4">
                        <FormField
                        control={form.control}
                        name="road"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Road</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                <div className="grid  items-center gap-4">
                        <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Number</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                <div className="grid  items-center gap-4">
                        <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Complement (optional)</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
            </div>
            <div className="flex items-center justify-between w-ful">
            <button onClick={handlebackButton} className="px-4 py-2">
                Back
            </button>
            <Button type="submit">Next</Button>
            </div>
            </form>
        </Form>
    )
}