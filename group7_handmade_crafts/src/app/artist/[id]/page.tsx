import { fetchAccountById } from "@/app/lib/online-data"; // Import the fetchAccountById function
import Image from "next/image"; // Import Image from Next.js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// interface Artist {
//   id: string;
//   name: string;
//   bio: string;
//   products: string[];
//   age: number;
//   imageUrl: string; // Assume the artist has an imageUrl property
// }

export default async function ArtistDetail({ params } : { params : { id: string } }) {
  const artist = await fetchAccountById(params.id)

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
        {/* <p>Age: {artistProfile.age}</p> */}
        {/* You might need to fetch and display products associated with the artist here */}
      </div>
    </div>
  );
};
