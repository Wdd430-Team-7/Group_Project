// components/sellers/ProductForm.tsx
import { createProduct } from "@/app/lib/actions";

export default function ProductForm({ artist_id }: { artist_id: string }) {
  return (
    <form action={createProduct} className="space-y-4">
      <input
        name="product_title"
        id="product_title"
        className="w-full border rounded-md px-3 py-2"
        type="text"
        placeholder="Product Title"
        required
      />
      <textarea
        name="product_description"
        id="product_description"
        className="w-full border rounded-md px-3 py-2"
        placeholder="Product Description"
        required
      />
      <input
        name="product_price"
        id="product_price"
        className="w-full border rounded-md px-3 py-2"
        type="number"
        placeholder="Add Price"
        step="0.01"
        min="0.00"
        max="9999999.99"
        required
      />
      <select
       name="product_category"
       id="product_category"
       className="w-full border rounded-md px-3 py-2"
       required>
        <option value="1">Artisanal</option>
        <option value="2">Textiles and Fabrics</option>
        <option value="3">Jewerly and Accessories</option>
        <option value="4">Home Decor and Furnishings</option>
        <option value="5">Personal Care</option>
        <option value="6">Stationary and Paper Goods</option>
      </select>

      <input
        name="product_image"
        className="w-full border rounded-md px-3 py-2"
        type="text"
        placeholder="Product Image URL"
        defaultValue={'/images/products/no_image.jpg'}
        required
      />
      <button
        type="submit"
        className="w-full bg-amber-500 text-black py-2 rounded-md hover:bg-amber-600"
      >
        Add Product
      </button>
      <input type="hidden" name="artist_id" value={artist_id} />
    </form>
  );
};