// NewItems.tsx
import React from "react";
import NewItemCards from "./new-item-card";

const NewItems: React.FC = () => {
  return (
    <div className="new-items flex flex-col">
      <h2 className="text-center text-xl font-bold">New Items</h2>
        <NewItemCards />
    </div>
  );
};

export default NewItems;
