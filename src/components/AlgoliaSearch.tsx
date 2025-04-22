'use client';

import {algoliasearch} from 'algoliasearch';
import {
  InstantSearch,
  useSearchBox,
  Hits
} from 'react-instantsearch-hooks-web';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const searchClient = algoliasearch('AE1LGFUMZI', '9c1cfe60caa6dea8d712e39939b58234');

const Hit = ({ hit }: any) => {
  const imagePath = hit.image_urls?.primary?.[0];
    const router = useRouter();
  return (
    <div onClick={()=>router.push(`search/?product=${hit.product_id}`)} className="p-4 border-b hover:bg-neutral-200 cursor-pointer border-neutral-700 flex h-20 gap-5">
      {imagePath && (
        <div className="relative flex-shrink-0 h-14 w-14">
          <Image
            className="object-cover rounded-md"
            src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${imagePath}`}
            alt={hit.title}
            fill
          />
        </div>
      )}
        <div className='w-36 flex-shrink-0'>
            <h2 className="font-semibold text-sm">{hit.title}</h2>
            <p className='text-sm font-thin text-neutral-500'>{hit.brand}</p>
            {/* {hit.price == hit.current_price ? (
                <p className='text-xs font-thin text-neutral-500'>{Number(hit.current_price).toLocaleString('EN-IN')}</p>
            ):(
                <>
                    <p className='text-xs font-thin text-neutral-500'>{Number(hit.current_price).toLocaleString('EN-IN')}</p>
                    <p className='text-xs font-thin text-neutral-500'>{Number(hit.current_price).toLocaleString('EN-IN')}</p>
                </>
            )} */}
            {hit.current_price == hit.price ? (
                    <p className="text-sm font-bold text-black">₹{Number(hit.current_price).toLocaleString('EN-IN')}</p>
                ) : (
                    <div className="flex relative gap-x-2 items-center">
                        <p className="text-sm font-bold text-black">₹{Number(hit.current_price).toLocaleString('EN-IN')}</p>
                        <p className="text-xs font-thin text-neutral-500 line-through">₹{Number(hit.price).toLocaleString('EN-IN')}</p>
                    </div>
                )}
        </div>
      <p className="line-clamp-2">{hit.description}</p>
    </div>
  );
};

function CustomSearchBox({ setSearchVal }: { setSearchVal: (val: string) => void }) {
  const { refine } = useSearchBox();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    refine(e.target.value);
    setSearchVal(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search products..."
      className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default function AlgoliaSearch() {
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <InstantSearch searchClient={searchClient} indexName="products">
        <CustomSearchBox setSearchVal={setSearchVal} />
        {searchVal.trim() !== '' && (
          <div className="bg-white border-neutral-700 border overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pink-100 max-h-96 rounded-md mt-4">
            <Hits hitComponent={Hit} />
          </div>
        )}
      </InstantSearch>
    </div>
  );
}
