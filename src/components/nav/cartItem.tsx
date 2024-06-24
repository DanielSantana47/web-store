import { products } from "@/data/products"

export const CartItem = ()=> {
    return(
        <div className="flex items-center justify-between">
            <div className="flex glex-col gap-2 sm:flex-row items-center">
                <img src={products[1].image} alt="" className="w-24"/>
                <div>
                    <p className="text-md sm:text-lg text-foreground">{products[0].name}</p>
                    <span>${products[0].price},00</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-md sm:text-lg">
                <button>+</button>
                <span className="text-foreground">1</span>
                <button>-</button>
            </div>
        </div>
    )
}