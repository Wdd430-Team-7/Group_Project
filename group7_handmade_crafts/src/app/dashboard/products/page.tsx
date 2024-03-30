import ProductForm from "@/app/components/sellers/ProductForm";

export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h2>Products</h2>
            <p>This is where the seller can see his products, create a new one, edit, and delete. Maybe something similar to the invoice of the nextjs dashboard.</p>
            <a href="/dashboard/products/add-product" className="px-4 py-2 bg-amber-400 text-black rounded-md w-fit self-center">Add Product</a>
        </div>
    );
}