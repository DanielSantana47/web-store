import { Button } from "../ui/button"
import { SiAlienware } from "react-icons/si";
import {
    Sheet,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "./cart";

export const Nav = ()=> {
    return(
        <nav className="container fixed top-0 left-0 right-0 py-4 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl">Web Store</h1>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="flex gap-2 text-md"><SiAlienware className="text-lg"/> Cart</Button>
                </SheetTrigger>
                <Menu/>
            </Sheet>
        </nav>
    )
}