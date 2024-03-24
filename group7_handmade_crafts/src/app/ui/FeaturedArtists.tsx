// FeaturedArtists.tsx
import Image from "next/image"; // Import next/image
import React from "react";
import FeaturedArtistCard from "./featured-artist-card";

const FeaturedArtists: React.FC = () => {
  return (
    <div className="featured-artists">
      <h2 className="text-xl font-bold">Featured Artists</h2>
      <div className="flex flex-col">
        <FeaturedArtistCard />
      </div>
    </div>
  );
};

export default FeaturedArtists;
