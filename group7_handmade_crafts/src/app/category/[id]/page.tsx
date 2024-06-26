import Header from "@/app/ui/header";
import { patrick_hand, lato } from "@/app/ui/fonts";
import { fetchCategoryName } from "@/app/lib/online-data";
import ProductsByCategory from "@/app/ui/category/products-by-category";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const category = await fetchCategoryName(id);
  const category_name = category.category_name;

  return (
    <>
      
      <div
        className={`${lato.className} flex flex-col items-center min-h-screen`}
      >
        <h2 className={`${patrick_hand.className} my-4 text-3xl`}>
          {category_name}
        </h2>
        <div className="flex flex-col rounded-md md:flex-row md:flex-wrap gap-4 m-4 md:justify-center">
          <ProductsByCategory id={id}/>
        </div>
      </div>
    </>
  );
}