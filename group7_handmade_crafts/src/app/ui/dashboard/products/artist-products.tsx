import ProductCard from "../../product-card";
import { fetchProductByArtist } from "@/app/lib/online-data";

export default async function ArtistProducts({
  artist_id,
}: {
  artist_id: string;
}) {
  const artistProducts = await fetchProductByArtist(artist_id);
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center">
      {artistProducts.map((product) => {
        const id = product.product_id
        return <ProductCard key={id} id={id} />
      })}
    </div>
  );
}
