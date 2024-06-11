"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { ProductCard } from "./productCard";
import { products } from "@/data/products";

export function TabsNav() {
  const tabs = [
    {
      title: "Keyboard",
      value: "keyboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Keyboard</p>
          <div className="grid grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'keyboard').map(item => (
              <ProductCard id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Mouse",
      value: "mouse",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Mouse</p>
          <div className="grid grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'mouse').map(item => (
              <ProductCard id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Monitor",
      value: "monitor",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-card">
          <p className="text-xl md:text-4xl font-bold mb-8">Monitor</p>
          <div className="grid grid-cols-3 gap-4">
            {products.filter(item=> item.category == 'monitor').map(item => (
              <ProductCard id={item.id} image={item.image} name={item.name} price={item.price}/>
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

