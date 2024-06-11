import { Home } from "@/components/home/home"
import { Nav } from "@/components/nav/nav"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { products } from "@/data/products"

const Page = ()=> {
  return(
    <div className="container py-4">
      <Nav/>
      <Home/>
    </div>
  )
}

export default Page