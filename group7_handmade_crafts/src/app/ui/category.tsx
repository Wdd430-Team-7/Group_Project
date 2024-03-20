import Link from "next/link";
import { fetchCategories } from "../lib/online-data";

export default async function Category() {
  const categories = await fetchCategories();
  return (
    <>
      {categories.map((category) => {
        const LinkIcon = category.category_icon;
        return (
          <Link
            key={category.category_id}
            href={`/category/${category.category_id}`}
            className="bg-white px-4 py-2 rounded-md hover:bg-amber-200 text-black"
          >
          <p className="md:hidden text-2xl">{LinkIcon}</p>
          <p className="hidden md:block">{category.category_name}</p>
          </Link>
        );
      })}
    </>
  );
}