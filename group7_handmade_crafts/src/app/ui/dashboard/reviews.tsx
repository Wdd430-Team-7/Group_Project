import ReviewCard from "./review-card";
import { fetchReviewByArtist } from "@/app/lib/online-data";


export default async function Reviews({ id }: { id: string }) {
  const reviewsByArtist = await fetchReviewByArtist(id)
  //console.log(reviewsByArtist);

  return (
        
        <div className="w-full flex flex-col gap-2 rounded-md p-4">
          <h2 className="font-bold text-center bg-amber-500 p-2 text-black rounded-md mb-4 w-full">Recent Reviews</h2>
          {reviewsByArtist.map((review)=>(
            <div key= {review.product_id}>
              <ReviewCard
              value={review.rating_value}
              title={review.rating_title}
              review_text={review.rating_review_text}
              product_id={review.product_id} />
            </div>
            ))}
        </div>
     
  );
}
