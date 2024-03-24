import Header from "../ui/header";
import SearchBar from "../ui/search";
import Pagination from "../ui/product/pagination";
import { Suspense } from "react";
import ProductsTable from "../ui/product/table";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Header />
      <h1 className="text-2xl text-center m-4">Search Products</h1>
      {/* Search bar */}
      <SearchBar placeholder={query} />
      {/* Search Results */}
      <div className="min-h-screen m-5">
        <h2>Search Results</h2>
        <ProductsTable query={query} currentPage={currentPage}/>
      </div>
    </>
  );
}
