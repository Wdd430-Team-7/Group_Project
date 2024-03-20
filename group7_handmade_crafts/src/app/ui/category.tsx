import Link from "next/link";
import { fetchCategories } from "../lib/online-data";

export default async function Category({ pathname } : { pathname: string}) {
  const categories = await fetchCategories();
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {categories.map((category) => {
        const LinkIcon = category.category_icon;
        const href = `/category/${category.category_id}`;
        return (
          <Link
            key={category.category_id}
            href={href}
            className={`bg-white px-4 py-2 rounded-md ${
              isActive(href)
                ? "bg-green-200 text-black"
                : "hover:bg-blue-200 text-black"
            }`}
          >
            <p className="md:hidden text-2xl">{LinkIcon}</p>
            <p className="hidden md:block">{category.category_name}</p>
          </Link>
        );
      })}
    </>
  );
}
