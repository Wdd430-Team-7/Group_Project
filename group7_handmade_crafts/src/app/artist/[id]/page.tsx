import { fetchAccountById, fetchProductByArtist } from "@/app/lib/online-data"; // Import the fetchAccountById function
import Image from "next/image"; // Import Image from Next.js
import styles from ".///artistDetail.module.css";
import { fetchStoriesById } from "@/app/lib/dashboard-data";
import Story from "@/app/ui/dashboard/stories/story";
import ProductCard from "@/app/ui/product-card";

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
  const stories = await fetchStoriesById(params.id);

  return (
    <div className="flex flex-col items-center md:mx-64">
      <h1 className="text-2xl font-bold">Artist Page</h1>
      <div className="flex flex-col md:flex-row gap-4 p-4 items-center">
        <Image
          src={artist.account_image}
          alt={artist.account_firstname}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          className="aspect-square rounded-md"
        />
        <div className="flex-flex-col">
          <p className="text-xl font-bold dark:text-amber-500 text-center md:text-left">{artist.account_firstname} {artist.account_lastname}</p>
          <p className="">{artist.account_description}</p>
          {/* <p className={styles.age}>Age: {artist.age}</p> */}
        </div>
      </div>
      <div className="p-4">
        {/* stories */}
        <p className="dark:text-amber-500 font-bold text-center">ARTIST STORIES</p>
        {stories.map((story) => {
          const text = story.story_content;
          const date = story.story_date.toString().slice(0, 15);
          const story_id = story.story_id;
          return <Story key={story_id} text={text} date={date} />;
        })}
      </div>
      <div>
        <p className="font-bold dark:text-amber-500 text-center">PRODUCTS BY THE ARTIST</p>
        <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
          {products.map((product) => (
            <ProductCard key={product.product_id} id={product.product_id} />
          ))}
        </div>
      </div>
    
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     <h1>Artist Page</h1>
  //     <div>
  //       <h1 className={styles.artistName}>{artist.account_firstname}</h1>
  //       <Image
  //         src={artist.account_image}
  //         alt={artist.account_firstname}
  //         width={300}
  //         height={300}
  //         className={styles.image}
  //       />
  //       <p className={styles.bio}>Bio: {artist.account_description}</p>
  //       {/* <p className={styles.age}>Age: {artist.age}</p> */}
  //       {products.map((product) => (
  //         <div key={product.product_id} className={styles.product}>
  //           <h2 className={styles.productTitle}>{product.product_title}</h2>
  //           <p className={styles.productDescription}>{product.product_description}</p>
  //           <p className={styles.productPrice}>${product.product_price}</p>
  //           <Image
  //             src={product.product_image}
  //             alt={product.product_title}
  //             width={300}
  //             height={300}
  //             className={styles.image}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //     <div>
  //       {/* stories */}
  //       <p className="dark:text-amber-500 font-bold">ARTIST STORIES</p>
  //         {
  //           stories.map(story => {
  //             const text = story.story_content;
  //             const date = story.story_date.toString().slice(0,15);
  //             const story_id = story.story_id;
  //             return (
  //               <Story key={story_id} text={text} date={date}/>
  //             );
  //           })
  //         }
  //     </div>
  //   </div>
  // );
}
