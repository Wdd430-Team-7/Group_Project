import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/16/solid";
import LikeButton from "./like-button";
import { fetchRecentRatings } from "../lib/online-data";
import ProductRating from "./product/average-rating";

export default async function Rating() {
  const data = await fetchRecentRatings(5);

  return (
    <>
      {data.map((item) => {
        const rating_id = item.rating_id;
        const title = item.rating_title;
        const review = item.rating_review_text;
        const rating_value = item.rating_value;
        const product_id = item.product_id;
        const artist_id = item.account_id;

        const product_name = item.product_title;
        const product_link = `/product/details/${product_id}`;

        const artist = item.account_firstname + " " + item.account_lastname;
        const artist_link = `/artist/${artist_id}`;

        return (
          <div key={rating_id} className="m-3 p-2 bg-white">
            <a href={product_link}>
              <h4 className="font-bold text-xl hover:underline">{product_name}</h4>
            </a>
            <div className="flex flex-row justify-between font-bold">
              <p>{title}</p>
              <div className="flex flex-row">
                {/* {[...Array(solidStars)].map((star) => {
                  return <StarSolid className="w-5 h-5 text-amber-500" />;
                })}
                {[...Array(emptyStars)].map((star) => {
                  return <StarOutline className="w-5 h-5 text-amber-500" />;
                })} */}
                {/* <p className="w-5 h-5 text-amber-700">{rating_value} stars</p> */}
                <ProductRating id={product_id} />
              </div>
            </div>
            <p className="flex flex-grow">{review}</p>
            <LikeButton />
          </div>
        );
      })}
    </>
  );
}
