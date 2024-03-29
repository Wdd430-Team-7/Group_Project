import { fetchAccountById, fetchProductByArtist } from "@/app/lib/online-data"; // Import the fetchAccountById function
import Image from "next/image"; // Import Image from Next.js

// interface Artist {
//   id: string;
//   name: string;
//   bio: string;
//   products: string[];
//   age: number;
//   imageUrl: string; // Assume the artist has an imageUrl property
// }

export default async function ArtistDetail({
  params,
}: {
  params: { id: string };
}) {
  const artist = await fetchAccountById(params.id);
  const products = await fetchProductByArtist(params.id);

  return (
    <div>
      <h1>Artist Page</h1>
      <div>
        <h1>{artist.account_firstname}</h1>
        <Image
          src={artist.account_image}
          alt={artist.account_firstname}
          width={300}
          height={300}
        />{" "}
        {/* Use Image component for Next.js images */}
        <p>Bio: {artist.account_description}</p>
        <p>Age:</p>
        {products.map((product) => (
          <div key={product.product_id}>
            <h2>{product.product_title}</h2>
            <p>{product.product_description}</p>
            <p>${product.product_price}</p>
            <Image
              src={product.product_image}
              alt={product.product_title}
              width={300}
              height={300}
            />
          </div>
        ))}
        {/* You might need to fetch and display products associated with the artist here */}
      </div>
    </div>
  );
}
