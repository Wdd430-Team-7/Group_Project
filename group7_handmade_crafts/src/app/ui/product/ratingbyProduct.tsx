import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/16/solid";
import LikeButton from "../like-button";
import React from "react";
import Rating from "../rating";
import StarsRatingbyReview from "@/app/ui/product/starsbyReview"


interface ProductRating {
  rating_id: string;
  rating_title: string;
  rating_review_text: string;
  rating_value: number;
  product_id: string;
  rating_timestamp: string;
  rating_reviewer: string;
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
       
        const rating_id = item.rating_id  
        const rating_title = item.rating_title
        const rating_review_text = item.rating_review_text
        const rating_value = item.rating_value
        const rating_reviewer = item.rating_reviewer
        const rating_timestamp = item.rating_timestamp
        const product_id = item.product_id; 
        //const artist_link = `/artist/${artist_id}`;

        return (
          <div key={item.rating_id} className="m-3 p-2 bg-white">
            
            <p className="font-bold text-xl hover:underline">{rating_title}</p>
            
            <div className="flex flex-row justify-between font-bold">
            {rating_reviewer === null ? (
                <p>No author information</p>
            ) : (
              <p>{rating_reviewer}</p>
            )}
              <div className="flex flex-row">
                {/* {[...Array(solidStars)].map((star) => {
                  return <StarSolid className="w-5 h-5 text-amber-500" />;
                })}
                {[...Array(emptyStars)].map((star) => {
                  return <StarOutline className="w-5 h-5 text-amber-500" />;
                })} */}
                <StarsRatingbyReview rating={rating_value} />
              </div>
            </div>
            <p className="flex flex-grow">{rating_review_text}</p>
            <p className="text-gray-400">{rating_timestamp}</p>
            <LikeButton />
          </div>
        );
      })}
    </>
  );
}

export default RatingItem
