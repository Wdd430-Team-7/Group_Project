import { fetchAccountById, fetchProductByArtist } from "@/app/lib/online-data"; // Import the fetchAccountById function
import Image from "next/image"; // Import Image from Next.js
import styles from ".///artistDetail.module.css";


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
    <div className={styles.container}>
      <h1>Artist Page</h1>
      <div>
        <h1 className={styles.artistName}>{artist.account_firstname}</h1>
        <Image
          src={artist.account_image}
          alt={artist.account_firstname}
          width={300}
          height={300}
          className={styles.image}
        />
        <p className={styles.bio}>Bio: {artist.account_description}</p>
        <p className={styles.age}>Age: {artist.age}</p>
        {products.map((product) => (
          <div key={product.product_id} className={styles.product}>
            <h2 className={styles.productTitle}>{product.product_title}</h2>
            <p className={styles.productDescription}>{product.product_description}</p>
            <p className={styles.productPrice}>${product.product_price}</p>
            <Image
              src={product.product_image}
              alt={product.product_title}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}