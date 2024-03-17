// NewItems.tsx
import Image from "next/image"; // Import next/image
import React from "react";

const NewItems: React.FC = () => {
  return (
    <div className="new-items">
      <h2>New Items</h2>
      <div className="item">
        <Image
          src="/new_item1.jpg" // Add the path to your image
          alt="New Item 1"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
        <h3>New Item 1 Name</h3>
        <p>Description of New Item 1</p>
      </div>
      <div className="item">
        <Image
          src="/new_item2.jpg" // Add the path to your image
          alt="New Item 2"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
        <h3>New Item 2 Name</h3>
        <p>Description of New Item 2</p>
      </div>
      {/* Add more new items as needed */}
    </div>
  );
};

export default NewItems;
