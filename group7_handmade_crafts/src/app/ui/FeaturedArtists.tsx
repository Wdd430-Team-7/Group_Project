// FeaturedArtists.tsx
import Image from "next/image"; // Import next/image
import React from "react";
import FeaturedArtistCard from "./featured-artist-card";

const FeaturedArtists: React.FC = () => {
  return (
    <div className="featured-artists">
      <h2>Featured Artists</h2>
      <div className="flex flex-col">
        <div className="artist">
          <Image
            src="/images/users/Jeremy.jpg" // Add the path to your image
            alt="Artist 1"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
          />
          <h3>Artist 1 Name</h3>
          <p>Brief description or bio of Artist 1</p>
        </div>
        <div className="artist">
          <Image
            src="/images/users/Jade.jpg" // Add the path to your image
            alt="Artist 2"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
          />
          <h3>Artist 2 Name</h3>
          <p>Brief description or bio of Artist 2</p>
        </div>
        {/* Add more featured artists as needed */}
        <FeaturedArtistCard />
      </div>
    </div>
  );
};

export default FeaturedArtists;
