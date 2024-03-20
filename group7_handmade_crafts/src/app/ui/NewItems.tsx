// NewItems.tsx
import Image from "next/image"; // Import next/image
import React from "react";
import { patrick_hand } from "./fonts";
import NewItemCard from "./new-item-card";

const NewItems: React.FC = () => {
  return (
    <div className="new-items flex flex-col">
      <h2>New Items</h2>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="item">
          <Image
            src="/images/products/advent-wreath-1069961_1280.jpg" // Add the path to your image
            alt="New Item 1"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
          />
          <h3>New Item 1 Name</h3>
          <p>Description of New Item 1</p>
        </div>
        <div className="item">
          <Image
            src="/images/products/art-3106207_1280.jpg" // Add the path to your image
            alt="New Item 2"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
          />
          <h3>New Item 2 Name</h3>
          <p>Description of New Item 2</p>
        </div>
        {/* Add more new items as needed */}
        <NewItemCard />
      </div>
    </div>
  );
};

export default NewItems;
