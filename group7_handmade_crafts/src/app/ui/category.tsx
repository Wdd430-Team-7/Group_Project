import Link from "next/link";
import { patrick_hand, inter } from "./fonts";
import { fetchCategories } from "../lib/online-data";

interface CategoryProps {
    onClickEvent: () => void;
}

export default async function Category({ onClickEvent }: CategoryProps) {
  const categories = await fetchCategories();
  return (
    <>
      {categories.map((category) => {
        return (
          <Link
            key={category.category_id}
            href={`/category/${category.category_id}`}
            className="bg-white px-4 py-2 rounded-md hover:bg-amber-200"
            onClick={onClickEvent}
          >
          {category.category_name}
          </Link>
        );
      })}
    </>
  );
}