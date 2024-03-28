import { fetchAccountById } from "@/app/lib/online-data"; // Import the fetchAccountById function
import Image from "next/image"; // Import Image from Next.js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Artist {
  id: string;
  name: string;
  bio: string;
  products: string[];
  age: number;
  imageUrl: string; // Assume the artist has an imageUrl property
}

const ArtistPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artistProfile, setArtistProfile] = useState<Artist | null>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const profileData = await fetchAccountById(id); // Fetch artist data using fetchAccountById
        const artist: Artist = {
          id: profileData.account_id,
          name: `${profileData.account_firstname} ${profileData.account_lastname}`,
          bio: profileData.account_bio,
          products: [], // You might need to fetch products associated with the artist as well
          age: profileData.account_age,
          imageUrl: profileData.account_imageUrl, // Adjust this according to the actual structure of your artist data
        };
        setArtistProfile(artist);
      } catch (error) {
        console.error("Error fetching artist profile:", error);
      }
    };

    if (id) {
      fetchArtistData();
    }
  }, [id]);

  if (!artistProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artist Page</h1>
      <div>
        <h1>{artistProfile.name}</h1>
        <Image
          src={artistProfile.imageUrl}
          alt={artistProfile.name}
          width={300}
          height={300}
        />{" "}
        {/* Use Image component for Next.js images */}
        <p>Bio: {artistProfile.bio}</p>
        <p>Age: {artistProfile.age}</p>
        {/* You might need to fetch and display products associated with the artist here */}
      </div>
    </div>
  );
};

export default ArtistPage;
