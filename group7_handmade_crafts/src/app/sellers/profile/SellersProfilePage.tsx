// pages/sellers/profile/SellersProfilePage.tsx
import React from "react";
import ProductForm from "@/app/components/sellers/ProductForm";
import { auth } from "@/../auth";

export default async function SellersProfilePage({ artist_id }: { artist_id: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        <ProductForm artist_id={artist_id} />
      </div>
    </div>
  );
};
