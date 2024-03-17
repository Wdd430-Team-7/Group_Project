// FeaturedArtists.tsx
import Image from "next/image"; // Import next/image
import React from "react";

const FeaturedArtists: React.FC = () => {
  return (
    <div className="featured-artists">
      <h2>Featured Artists</h2>
      <div className="artist">
        <Image
          src="/artist1.jpg" // Add the path to your image
          alt="Artist 1"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
        <h3>Artist 1 Name</h3>
        <p>Brief description or bio of Artist 1</p>
      </div>
      <div className="artist">
        <Image
          src="/artist2.jpg" // Add the path to your image
          alt="Artist 2"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
        <h3>Artist 2 Name</h3>
        <p>Brief description or bio of Artist 2</p>
      </div>
      {/* Add more featured artists as needed */}
    </div>
  );
};

export default FeaturedArtists;
