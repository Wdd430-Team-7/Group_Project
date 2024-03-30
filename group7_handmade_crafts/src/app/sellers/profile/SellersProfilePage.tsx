// pages/sellers/profile/SellersProfilePage.tsx
import React from "react";
import ProductForm from "../../../components/sellers/ProductForm";

const SellersProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sellers Profile</h1>
        <ProductForm />
      </div>
    </div>
  );
};

export default SellersProfilePage;
