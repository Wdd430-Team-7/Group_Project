import Rating from '@/app/ui/rating';
import { reviewsData } from '@/app/ui/placeholder-data';

export default function Reviews() {


    return (
        <div className='text-black'>
            <h3 className='text-2xl font-bold'>Reviews</h3>
            {/* {reviewsData.map(review => {
               return <Rating 
                    name={review.account_firstname}
                    title={review.rating_title} 
                    text={review.rating_review_text}
                    rating_value={review.rating_value}
                />
            }
            )} */}
            <Rating />
        </div>
    )
}