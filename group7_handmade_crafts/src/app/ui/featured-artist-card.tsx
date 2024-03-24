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
          <Link
            key={id}
            href={`/artist/${id}`}
            className="flex flex-row gap-2 p-4 mt-4 bg-amber-100 rounded-full hover:bg-amber-200 text-black"
          >
            <Image
              src={image}
              width={100}
              height={100}
              alt={`${firstName} ${lastName}`}
              className="rounded-full"
            />
            <div className="flex flex-col items-begin">
            <p className="text-500 font-bold">
              {firstName} {lastName}
            </p>
            <p className="text-black">{description}</p>

            </div>
          </Link>
        );
      })}
    </>
  );
}
