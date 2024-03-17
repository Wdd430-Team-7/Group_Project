import React from 'react';
import Image from "next/image";
import Header from "./ui/header";
import { lato } from '@/app/ui/fonts';
import NewItems from "./ui/NewItems"; // Import NewItems component
import FeaturedArtists from "./ui/FeaturedArtists"; // Import FeaturedArtists component
import Search from "./ui/search";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col">
        
        <div className="flex-col justify-center p-4 m-4 bg-amber-100">
        <div className="flex w-full items-center justify-center">
          <h1 className={`${lato.className} text-2xl text-black`}>Search over 1000 of handcrafted artist works</h1>
        </div>
      
          <Search placeholder="Search by category/price..."/>
        </div>
        <div className="flex flex-row p-4 mx-4 justify-center bg-amber-100">
          New Items
          {/* Lourenco */}
        </div>
        <div className="flex flex-row p-4 mb-4 justify-center gap-4">
          <div className="bg-amber-100 p-4 flex-grow">
            Reviews
            {/* Moises */}
          </div>
          <div className="bg-amber-100 p-4 flex-grow">
            Featured Artists
            {/* Moises */}
          </div>
        </div>
      </main>
      <footer className="w-full bg-amber-400 p-4 text-center">
        <p>Footer</p>
      </footer>
    </>
  );
}
