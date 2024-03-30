// components/sellers/ProductForm.tsx
'use client'
import React, { useState } from "react";

const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., submit product details)
    console.log("Product submitted:", {
      name: productName,
      description: productDescription,
      price: productPrice,
    });
    // Reset form fields after submission
    setProductName("");
    setProductDescription("");
    setProductPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border rounded-md px-3 py-2"
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        className="w-full border rounded-md px-3 py-2"
        placeholder="Product Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        className="w-full border rounded-md px-3 py-2"
        type="text"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
