import { fetchAccountById, fetchProductById } from "@/app/lib/online-data";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./product/average-rating";

export default async function ProductCard({ id }: { id: string }) {
  const product_id = id;
  const product = await fetchProductById(product_id);
  const product_title = product.product_title;
  const product_description = product.product_description;
  const product_image = product.product_image;
  const product_price = product.product_price;
  const artist_id = product.artist_id;
  const artist = await fetchAccountById(artist_id);
  const artist_name = artist.account_firstname + " " + artist.account_lastname;
  return (
    <>
      <div
        key={product_id}
        className="flex flex-col shadow-md rounded-md bg-white hover:bg-amber-200 w-64"
      >
        <Link href={`../product/details/${product_id}`} className="flex flex-col w-64">
          <Image
            src={product_image}
            width={320}
            height={320}
            alt={`Image for ${product_title}`}
            className="border-b-[3px] rounded-tl-md rounded-tr-md border-amber-500"
          />
          <div className="mx-4">
            <p className="text-2xl font-bold my-2">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product_price)}
            </p>
            {/* rating needs dynamic */}
            <ProductRating id={product_id} />
            {/* <p>⭐⭐⭐⭐⭐</p> */}
            <p className="font-bold">{product_title}</p>
            {/* <p className="mb-2 text-wrap">{product_description}</p> */}
          </div>
        </Link>

        <Link
          href={`../artist/${artist_id}`}
          className="underline mb-4 mx-4 hover:text-green-500 w-64"
        >
          {artist_name}
        </Link>
      </div>
    </>
  );
}