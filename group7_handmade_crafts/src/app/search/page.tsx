import Header from "../ui/header";
import SearchBar from "../ui/search";
import Pagination from "../ui/product/pagination";
import { Suspense } from "react";
import ProductsTable from "../ui/product/table";
import { fetchCategories } from "../lib/online-data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    page?: string;
  };
}) {
  const categories = await fetchCategories();
    const query = searchParams?.query || "not found";
    const currentPage = Number(searchParams?.page) || 1;
    const categoryId = Number(searchParams?.category) || 0;

  return (
    <>
      <Header />
      <h1 className="text-2xl text-center m-4">Search Products</h1>
      {/* Search bar */}
      <SearchBar placeholder={query} categories={categories} selected={categoryId} />
      {/* Search Results */}
      <div className="min-h-screen m-5">
        <h2>Search Results</h2>
        <ProductsTable query={query} currentPage={currentPage}/>
      </div>
    </>
  );
}
