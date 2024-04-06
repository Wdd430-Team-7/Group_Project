import { calculateProductRating } from "@/app/lib/online-data";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

export default async function ProductRating({ id }: { id: string }) {
  const data = await calculateProductRating(id);
  const average_rating = data.average_value;
  const num_ratings = data.num_ratings;  

  if (average_rating == null) {
    return (
      <div>
        <p className="text-base text-gray-500">**No rating yet**</p>
      </div>
    );
  }

  const negative_rating = 5 - average_rating;

    if (String(average_rating)[2] >= '5' && String(negative_rating)[2] < '5') {
        const solid_stars = Math.ceil(average_rating);
        const empty_stars = Math.floor(negative_rating);
        
        return (
            <div className="flex flex-col">
               <div className="flex flex-row">
                    {[...Array(solid_stars)].map((star, index) => {
                        return <StarSolid key={index} className='w-5 h-5 text-amber-500'/>
                    })}
                    {[...Array(empty_stars)].map((star, index) => {
                        return <StarOutline key={index} className='w-5 h-5 text-amber-500' />
                    })}
                </div>
                <div className="text-base text-start">{`(${num_ratings} Ratings)`}</div>
            </div>
          )  
    } else if (String(average_rating)[2] <= '5' && String(negative_rating)[2] > '5') {
        const solid_stars = Math.floor(average_rating);
        const empty_stars = Math.ceil(negative_rating);
        
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    {[...Array(solid_stars)].map((star, index) => {
                        return <StarSolid key={index} className='w-5 h-5 text-amber-500'/>
                    })}
                    {[...Array(empty_stars)].map((star, index) => {
                        return <StarOutline key={index} className='w-5 h-5 text-amber-500' />
                    })}
                </div>
                <div className="text-base text-start">{`(${num_ratings} Ratings)`}</div>
            </div>
          )  
    } else {
        const solid_stars = Math.floor(average_rating);
        const empty_stars = Math.floor(negative_rating);
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    {[...Array(solid_stars)].map((star, index) => {
                        return <StarSolid key={index} className='w-5 h-5 text-amber-500'/>
                    })}
                    {[...Array(empty_stars)].map((star, index) => {
                        return <StarOutline key={index} className='w-5 h-5 text-amber-500' />
                    })}
                </div>
                <div className="text-base text-start">{`(${num_ratings} Ratings)`}</div>
            </div>
        )
    }

//   if (average_rating >= 1 && average_rating < 1.5) {
//     return (
//       <div className="flex flex-row">
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <div>{`(${num_ratings} Ratings)`}</div>
//       </div>
//     );
//   } else if (average_rating >= 1.5 && average_rating < 2.5) {
//     return (
//       <div className="flex flex-row">
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <div>{`(${num_ratings} Ratings)`}</div>
//       </div>
//     );
//   } else if (average_rating >= 2.5 && average_rating < 3.5) {
//     return (
//       <div className="flex flex-row">
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <div>{`(${num_ratings} Ratings)`}</div>
//       </div>
//     );
//   } else if (average_rating >= 3.5 && average_rating < 4.5) {
//     return (
//       <div className="flex flex-row">
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarOutline className="w-5 h-5 text-amber-500" />
//         <div>{`(${num_ratings} Ratings)`}</div>
//       </div>
//     );
//   } else if (average_rating >= 4.5) {
//     return (
//       <div className="flex flex-row">
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <StarSolid className="w-5 h-5 text-amber-500" />
//         <div>{`(${num_ratings} Ratings)`}</div>
//       </div>
//     );
//   }
}
