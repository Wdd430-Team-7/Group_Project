'use client';

import Link from "next/link";
import { patrick_hand, inter } from "./fonts";
import { fetchCategories } from "../lib/online-data";

export default async function Category() {
  const categories = await fetchCategories();
  console.log(categories);
  return (
    <>
      {categories.map((category) => {
        const LinkIcon = category.category_icon;
        const id = category.category_id;
        const name = category.category_name;
        const link = `/category/${id}`;
        return (
          <Link
            key={id}
            href={link}
            className={clsx(
              "bg-white px-4 py-2 rounded-md hover:bg-amber-200 text-black",
              {
                "bg-amber-200 underline": pathname === link,
              },
            )}
          >
          <p className="md:hidden text-2xl">{LinkIcon}</p>
          <p className="hidden md:block">{name}</p>
          </Link>
        );
      })}
    </>
  );
}