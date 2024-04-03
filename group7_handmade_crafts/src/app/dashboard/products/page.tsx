import ProductForm from "@/app/components/sellers/ProductForm";
import ProductCard from "@/app/ui/product-card";
import ArtistProducts from "@/app/ui/dashboard/products/artist-products";
import { fetchProductByArtist } from "@/app/lib/online-data";
import ProductsTable from "@/app/ui/dashboard/products/table";

export default async function Page() {
  const artist_id = "1aa97dfd-5aa0-4f80-afce-8cef34880226"; // change when Auth is ready
  const products = await fetchProductByArtist(artist_id);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-bold text-center dark:text-amber-500 text-2xl font-bold">My Products</h2>
      <a
        href="/dashboard/products/add-product"
        className="px-4 py-2 bg-amber-400 text-black rounded-md w-fit self-center"
      >
        Add Product
      </a>
      <ProductsTable artist_id={artist_id}/>
    </div>
  );
}
