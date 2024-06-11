import { CarFrontIcon } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle"
import { Button } from "../ui/button"
import { BsCartCheck } from "react-icons/bs";
import { SiAlienware } from "react-icons/si";

export const Nav = ()=> {
    return(
        <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl">Web Store</h1>
                <ThemeToggle/>
            </div>
            <Button className="flex gap-2 text-md"><SiAlienware className="text-lg"/> Carrinho</Button>
        </nav>
    )
}