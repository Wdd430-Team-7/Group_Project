// NewItems.tsx
import Image from "next/image"; // Import next/image
import React from "react";
import { patrick_hand } from "./fonts";
import NewItemCard from "./new-item-card";

const NewItems: React.FC = () => {
  return (
    <div className="new-items flex flex-col">
      <h2 className="text-center text-xl font-bold">New Items</h2>
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        <NewItemCard />
      </div>
    </div>
  );
};

export default NewItems;
