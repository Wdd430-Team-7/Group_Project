import Link from "next/link";
import { deleteProduct } from "@/app/lib/product-actions";

export function UpdateProduct({ id }: { id: string }) {
    return (
      <Link
        href={`/dashboard/products/edit/${id}`} // use curly braces when changing to string literals!
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        EDIT
      </Link>
    );
  }
  
  export function DeleteProduct({ id }: { id: string }) {
    const deleteProductWithId = deleteProduct.bind(null, id);
  
    return (
      <form action={deleteProductWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="">DELETE</span>
        </button>
      </form>
    );
  }