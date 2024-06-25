"use client";

import { Tabs } from "../ui/tabs";
import { ProductCard } from "./productCard";
import { products } from "@/data/products";

export function TabsNav() {
  const tabs = [
    {
      title: "Keyboard",
      value: "keyboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Keyboard</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'keyboard').map(item => (
              <ProductCard item={item}/>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Mouse",
      value: "mouse",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Mouse</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'mouse').map(item => (
              <ProductCard item={item}/>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Monitor",
      value: "monitor",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Monitor</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'monitor').map(item => (
              <ProductCard item={item}/>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

