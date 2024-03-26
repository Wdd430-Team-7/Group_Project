'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import CategorySelect from "./search/category-select";
import { Category } from "../lib/definitions";
import { useState } from 'react';
import { inter } from './fonts';


export default function SearchBar({ placeholder, categories, selected = 0 }: { placeholder: string, categories: Category[], selected: number }){
  const [category, setCategory] = useState(selected)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  
  return (
    <>
    {/* Search bar */}
    <div className="relative flex flex-1 flex-shrink-0 mx-5">
      <label htmlFor="search" className="sr-only text-black">
      </label>
      <input
        className="peer block w-full rounded-md border border-yellow-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-white"
        placeholder={placeholder}
        id="search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button type="submit"><MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /></button>
      <select
        name="category_id"
        id="category_id"
        defaultValue={searchParams.get("category")?.toString()}
        className={`${inter.className} absolute right-3 self-center bg-white text-right w-16 md:w-auto`}
        onChange={(e) => setCategory(Number(e.target.value))}
      >
        <option value="0">Any</option>
        <CategorySelect categories={categories} selected={category} />

      </select>
    </div>
    </>
    
  );
}