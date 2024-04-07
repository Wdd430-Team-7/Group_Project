import ReviewCard from "./review-card";
import { fetchReviewByArtist } from "@/app/lib/online-data";
import { auth } from "../../../../auth";
import { fetchAccountByEmail } from "@/app/lib/online-data";


export default async function Reviews() {
  const session = await auth()
  const artist_email = session?.user?.email
  const artistData = await fetchAccountByEmail(artist_email)
  const artist_id = artistData?.account_id
  const reviewsByArtist = await fetchReviewByArtist(artist_id)
  //console.log(reviewsByArtist);

  return (
        
        <div className="w-full flex flex-col gap-2 rounded-md p-4">
          <h2 className="font-bold text-center md:text-left dark:text-amber-500 p-2 rounded-md mb-4 w-full">RECENT REVIEWS</h2>
          {reviewsByArtist.map((review)=>(
            <div key= {review.rating_id}>
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
