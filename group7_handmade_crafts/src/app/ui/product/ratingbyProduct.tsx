import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/16/solid";
import LikeButton from "../like-button";
import React from "react";
import Rating from "../rating";


interface ProductRating {
  rating_id: string;
  rating_title: string;
  rating_review_text: string;
  rating_value: number;
  buyer_id: string;
  account_firstname: string;
  account_lastname: string;
  account_image: string;
  product_id: string;
  product_title: string;
}

interface RatingProps{
  ratings: ProductRating[];
}
//{id} : {id: string}
const RatingItem: React.FC<RatingProps> =({ ratings }) => {
  //const data = await fetchRecentRatings(5);

  return (
    <>
      {ratings.map((item:ProductRating) => {
       
        const artist_id = item.buyer_id;
        const product_id = item.product_id;
        const product_link = `/product/${product_id}`;
        const artist = item.account_firstname + " " + item.account_lastname;
        const artist_link = `/artist/${artist_id}`;

        return (
          <div key={item.rating_id} className="m-3 p-2 bg-white">
            <a href={product_link}>
              <p className="font-bold text-xl hover:underline">{item.product_title}</p>
            </a>
            <div className="flex flex-row justify-between font-bold">
              <p>{item.rating_title}</p>
              <div className="flex flex-row">
                {/* {[...Array(solidStars)].map((star) => {
                  return <StarSolid className="w-5 h-5 text-amber-500" />;
                })}
                {[...Array(emptyStars)].map((star) => {
                  return <StarOutline className="w-5 h-5 text-amber-500" />;
                })} */}
                <p className="w-5 h-5 text-amber-500">{item.rating_value} stars</p>
              </div>
            </div>
            <p className="flex flex-grow">{item.rating_review_text}</p>
            <LikeButton />
          </div>
        );
      })}
    </>
  );
}

export default RatingItem
