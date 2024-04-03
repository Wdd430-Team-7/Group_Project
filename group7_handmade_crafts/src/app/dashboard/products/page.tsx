import ProductForm from "@/app/components/sellers/ProductForm";
import ProductCard from "@/app/ui/product-card";
import ArtistProducts from "@/app/ui/dashboard/products/artist-products";

export default function Page() {
  //Jane Smith
//   const artist_id = "1aa97dfd-5aa0-4f80-afce-8cef34880226";
  //John Cenamics
  const artist_id = "b222d544-c5aa-4558-b4a6-74cd8e088afd";

  return (
    <div className="flex flex-col gap-4">
      <h2>Products</h2>
      <a
        href="/dashboard/products/add-product"
        className="px-4 py-2 bg-amber-400 text-black rounded-md w-fit self-center"
      >
        Add Product
      </a>
      <ArtistProducts artist_id={artist_id} />
    </div>
  );
}
