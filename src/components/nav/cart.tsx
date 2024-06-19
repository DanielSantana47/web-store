import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { Form } from "../form/form"
  

export const Menu = ()=> {
    return(
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription className="flex flex-col">
                    <div>

                    </div>
                    <div className="flex item-center justify-between">
                        <span>subtotal</span>
                        <span>$0,00</span>
                    </div>
                    <Form/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
    )
}

