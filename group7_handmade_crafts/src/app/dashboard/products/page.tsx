import { fetchAccountByEmail } from "@/app/lib/online-data";
import ProductsTable from "@/app/ui/dashboard/products/table";
import { auth } from "@/../auth";
import AccessDenied from "@/app/ui/dashboard/access-denied";

export default async function Page() {
  const session = await auth();
  const email = session?.user?.email
  const account = await fetchAccountByEmail(email)

  if (account) {
    const artist_id = account.account_id
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
  } else {
    return (
      <>
          <AccessDenied />
      </>
    );
  }
  
}
