'use client'
import CategorySec from "@/components/categorySec";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <Hero/>
      <h1 className='text-center'>Category</h1>
      <CategorySec/>
    </div>
  );
}
