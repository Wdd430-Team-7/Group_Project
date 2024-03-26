"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { inter } from "./fonts";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CategorySelect from "./search/category-select";
import { Category } from "../lib/definitions";

export default function HomeSearch({
  placeholder,
  categories,
}: {
  placeholder: string;
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("0");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { replace } = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (query.trim() === "") {
      router.push(`/search?category=${encodeURIComponent(category)}`);
    } else {
      router.push(
        `/search?category=${encodeURIComponent(
          category
        )}&query=${encodeURIComponent(query)}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex flex-1 flex-shrink-0"
    >
      <label htmlFor="search" className="sr-only text-black">
        Search over thousands of handcrafted artist works
      </label>
      <input
        type="text"
        className="peer block w-full rounded-md border border-yellow-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-white"
        placeholder={placeholder}
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </button>
      <select
        name="category_id"
        id="category_id"
        defaultValue={searchParams.get("category")?.toString()}
        className={`${inter.className} absolute right-3 self-center bg-white text-right w-16 md:w-auto`}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="0">Any</option>
        <CategorySelect categories={categories} selected={Number(category)} />

      </select>
    </form>
  );
}
