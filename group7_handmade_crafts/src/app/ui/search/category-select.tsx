"use client";
import { Category } from "@/app/lib/definitions";
import { inter } from "../fonts";

export default function CategorySelect({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <>
      {categories.map((category) => {
        const id = category.category_id;
        const name = category.category_name;
        const icon = category.category_icon;
        return (
          <option key={id} value={id} className={`${inter.className}`}>
            {name}
          </option>
        );
      })}
    </>
  );
}
