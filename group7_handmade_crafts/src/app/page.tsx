import React from "react";
import Image from "next/image";
import Header from "./ui/header";
import { lato } from "@/app/ui/fonts";
import NewItems from "./ui/NewItems"; // Import NewItems component
import FeaturedArtists from "./ui/FeaturedArtists"; // Import FeaturedArtists component
import Search from "./ui/search"; // Use this in the actual search page instead
import HomeSearch from "./ui/home-search"; // Use this for the home page
import Reviews from "./ui/review";
import { fetchCategories } from "./lib/online-data";
import { Suspense } from "react";

export default async function Home() {
  const categories = await fetchCategories();
  return (
    <>
      
      <div className="min-h-screen flex flex-col">
        <div className="flex-col justify-center p-4 m-4 md:w-4/5 self-center">
          <div className="flex w-full items-center justify-center">
            <h2 className={`${lato.className} text-2xl`}>
              Search over thousands of handcrafted artist works
            </h2>
          </div>
          <Suspense>
            <HomeSearch
              placeholder="Search by category/price..."
              categories={categories}
            />
          </Suspense>
        </div>
        <div className="flex flex-col p-4 mx-4 justify-center">
          {/* Lourenco */}
          <NewItems />
        </div>
        <div className="flex flex-col md:flex-row p-4 mb-4 justify-center gap-4">
          <div className="p-4 flex-grow md:w-1/2">
            {/* Isaac */}
            <Reviews />
          </div>
          <div className="p-4 flex-grow md:w-1/2">
            {/* Lourenco */}
            <FeaturedArtists />
          </div>
        </div>
      </div>
      
      
      
    </>
  );
}
