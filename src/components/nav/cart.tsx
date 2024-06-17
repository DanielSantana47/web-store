import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
  

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
                    <Button className="mt-8">Finalizar</Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
    )
}

