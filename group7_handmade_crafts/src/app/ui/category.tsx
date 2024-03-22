'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const categories = [
  {
    category_id: 1,
    category_name: 'Artisanal',
    category_icon: '🖼️',
  },
  {
    category_id: 2,
    category_name: 'Textile and Fabrics',
    category_icon: '👕',
  },
  {
    category_id: 3,
    category_name: 'Jewelry and Accessories',
    category_icon: '💎',
  },
  {
    category_id: 4,
    category_name: 'Home and Furnishings',
    category_icon: '🏠',
  },
  {
    category_id: 5,
    category_name: 'Personal Care',
    category_icon: '🧼',
  },
  {
    category_id: 6,
    category_name: 'Stationery and Paper Goods',
    category_icon: '📜',
  },
]

export default function Category() {
  const pathname = usePathname();
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