// pages/sellers/profile/SellersProfilePage.tsx
import React from "react";
import ProductForm from "@/app/components/sellers/ProductForm";

const SellersProfilePage: React.FC = () => {
  const artist_id = 'b222d544-c5aa-4558-b4a6-74cd8e088afd'; // change after auth
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        <ProductForm artist_id={artist_id} />
      </div>
    </div>
  );
};

export default SellersProfilePage;
