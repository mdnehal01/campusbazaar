'use client'
import { BuyOrSell } from "@/components/buyOrSell";
import CategorySec from "@/components/categorySec";
import Hero from "@/components/hero";
import HowToSell from "@/components/howToSell";
import WhyBuySell from "@/components/whyBuySell";

export default function Home() {
  return (
    <div className="h-auto w-full">
      {/* hero section on LANDING PAGE*/}
      <Hero/>

      <div className="bg-slate-200 py-12">
        <h1 className='text-2xl font-bold font-sans text-slate-500 mx-20'>Categories to Sell & Buy from</h1>
        <CategorySec/>
      </div>

      
      <div className="bg-white py-12">
        <h1 className='text-2xl font-bold font-sans text-slate-500 mx-20'>What should we do today?</h1>
        <BuyOrSell/>
      </div>

      <div className="howToSell">
        <HowToSell />
      </div>

      <div className="whyBuySell">
        <WhyBuySell />
      </div>


    </div>
  );
}
