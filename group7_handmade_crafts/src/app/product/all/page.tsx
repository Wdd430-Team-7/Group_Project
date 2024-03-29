import { fetchProductsCategoryArtist } from "@/app/lib/online-data";
import Link from "next/link";
import { patrick_hand, lato } from "@/app/ui/fonts";
import Header from "../../ui/header";
import Image from "next/image";
import ProductRating from "@/app/ui/product/average-rating";

//<div className={`${lato.className} flex justify-center text-black bg-white min-h-screen text-3xl`}>

export default async function Product() {
  const products = await fetchProductsCategoryArtist();
  // console.log(products);

  return (
    <>
      <div
        className={`${lato.className} flex flex-wrap text-black bg-white min-h-screen text-3xl place-content-center gap-4 py-10`}
      >
        {products.map((product) => (
          <Link
            key={product.product_id}
            href={`/product/details/${product.product_id}`}
            className="bg-white px-4 py-2 rounded-md hover:bg-amber-200 text-black"
          >
            <div
              className={
                "max-w-sm rounded overflow-hidden shadow-lg bg-amber-100"
              }
            >
              <div className="flex justify-center pt-6 ">
                <Image
                  className="border-b-[3px] rounded-tl-md rounded-tr-md border-amber-500"
                  src={`${product.product_image}`}
                  alt={`Image for ${product.product_name}`}
                  width={320}
                  height={320}
                />
              </div>
              <div className="px-6 py-4">
                {/* rating needs dynamic */}
                <ProductRating id={product.product_id} />
                <div className={"font-bold text-xl mb-2"}>
                  {product.product_title}
                </div>
                <p className={"text-gray-700 text-base"}>
                  {product.product_description}
                </p>
              </div>
              <div className={"px-6 pt-4 pb-2"}>
                <span
                  className={
                    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  }
                >
                  US${product.product_price}
                </span>
                <span
                  className={
                    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  }
                >
                  {product.category_name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
