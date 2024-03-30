import { fetchFeaturedArtistsLimited } from "../lib/online-data";
import Link from "next/link";
import Image from "next/image";

export default async function FeaturedArtistCard() {
  const artists = await fetchFeaturedArtistsLimited(5);
  return (
    <>
      {artists.map((artist) => {
        const firstName = artist.account_firstname;
        const lastName = artist.account_lastname;
        const description = artist.account_description;
        const image = artist.account_image;
        const id = artist.account_id;

        return (
          <div key={id} className="gap-2 p-4 mt-4 rounded-md">
            <Image
              src={image}
              width={70}
              height={70}
              alt={`${firstName} ${lastName}`}
              style={{ objectFit: "cover" }}
              className="rounded-full float-left mr-2"
            />

            <div className="">
              <Link href={`/artist/${id}`}>
                <p className="text-amber-700 dark:text-amber-500 font-bold underline md:no-underline hover:underline">
                  {firstName} {lastName}
                </p>
              </Link>
              <p className="text-wrap">{description.slice(0,140)}...</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
