import Link from "next/link";
import { fetchNewProducts } from "../lib/online-data";
import Image from "next/image";

export default async function NewItemCard() {
  const newItems = await fetchNewProducts(5);
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap">
      {newItems.map((item) => {
        const name = item.product_title;
        const description = item.product_description;
        const image = item.product_image;
        const id = item.product_id;
        const price = item.product_price;
        const artist = item.account_firstname + " " + item.account_lastname;
        const account_id = item.account_id;
        return (
          <div className="p-4 rounded-md hover:bg-amber-200 flex flex-col m-4 gap-1">
            <Link
              key={id}
              href={`/product/${id}`}
              className="flex flex-col gap-1"
            >
              <div className="relative">
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={`Image for ${name}`}
                  className="w-40 rounded-md"
                />
                <p className="bg-white text-xl px-2 m-2 rounded-full absolute bottom-0 right-0">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(price)}
                </p>
              </div>
              <div>
                {/* Need dynamic rating component here */}
                <p>⭐⭐⭐⭐</p>
              </div>
              <div>
                <p className="text-md text-wrap w-40 font-bold">{name}</p>
                <p className="text-sm w-40 text-wrap">{description}</p>
              </div>
              </Link>
              <div>
                <Link key={account_id} href={`/artist/${account_id}`} className="text-sm italic font-bold hover:underline">{artist}</Link>
              </div>
          </div>
        );
      })}
    </div>
  );
}
