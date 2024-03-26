import { calculateProductRating } from "@/app/lib/online-data"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";


export default async function ProductRating({id} : {id: string}) {
    const data = await calculateProductRating(id);
    const average_rating = data.average_value;

    if (average_rating == null) {
        return (
            <div>
                <p>No Ratings</p>
            </div>
        );
    }

    if (average_rating >= 1 && average_rating < 1.5) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
            </div>
        );
    } else if (average_rating >= 1.5 && average_rating < 2.5) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
            </div>
        );
    } else if (average_rating >= 2.5 && average_rating < 3.5) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
            </div>
        );
    } else if (average_rating >= 3.5 && average_rating < 4.5) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
            </div>
        );
    } else if (average_rating >= 4.5) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
            </div>
        );
    }
}