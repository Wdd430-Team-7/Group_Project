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
        step="0.01"
        min="0.00"
        max="9999999.99"
        required
      />
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