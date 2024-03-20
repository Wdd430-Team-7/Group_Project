import Link from "next/link";
import { fetchCategories } from "../lib/online-data";
import clsx from "clsx";

export default async function Category({ pathname } : { pathname: string}) {
  const categories = await fetchCategories();

  return (
    <>
      {categories.map((category) => {
        const LinkIcon = category.category_icon;
        const href = `/category/${category.category_id}`;
        return (
          <Link
            key={category.category_id}
            href={href}
            className={clsx(
              "bg-white px-4 py-2 rounded-md hover:bg-amber-200",
              {
                "bg-amber-200 text-black" : pathname === href,
              },
            )}>
            <p className="md:hidden text-2xl">{LinkIcon}</p>
            <p className="hidden md:block">{category.category_name}</p>
          </Link>
        );
      })}
    </>
  );
}
