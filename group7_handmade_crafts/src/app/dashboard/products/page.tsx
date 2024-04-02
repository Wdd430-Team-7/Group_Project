import ProductForm from "@/app/components/sellers/ProductForm";
import ProductCard from "@/app/ui/product-card";
import ArtistProducts from "@/app/ui/dashboard/products/artist-products";

export default function Page() {
    const artist_id = '1aa97dfd-5aa0-4f80-afce-8cef34880226'; // change when Auth is ready
    return (
        <div className="flex flex-col gap-4">
            <h2>Products</h2>
            <p>This is where the seller can see his products, create a new one, edit, and delete. Maybe something similar to the invoice of the nextjs dashboard.</p>
            <a href="/dashboard/products/add-product" className="px-4 py-2 bg-amber-400 text-black rounded-md w-fit self-center">Add Product</a>
            <ArtistProducts artist_id={artist_id}/>
        </div>
    );
}