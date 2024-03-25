import { fetchNewProducts } from "../lib/online-data";
import ProductCard from "./product-card";

export default async function NewItemCards() {
  const newItems = await fetchNewProducts(5);
  return (
    <div className="flex flex-col justify-center self-center md:flex-row gap-4 flex-wrap">
      {newItems.map((item) => {
        const id = item.product_id;
        return (
          <ProductCard key={id} id={id} />
        );
      })}
    </div>
  );
}
