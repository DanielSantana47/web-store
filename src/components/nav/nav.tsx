import { CarFrontIcon } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle"
import { Button } from "../ui/button"
import { BsCartCheck } from "react-icons/bs";
import { SiAlienware } from "react-icons/si";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "./cart";

export const Nav = ()=> {
    return(
        <nav className="flex items-center justify-between">
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