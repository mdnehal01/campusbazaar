'use client'
import { BuyOrSell } from "@/components/buyOrSell";
import CategorySec from "@/components/categorySec";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <Hero/>
      <BuyOrSell/>
      <br /><br />
      <h1 className='text-center'>Category</h1>
      <CategorySec/>
    </div>
  );
}
