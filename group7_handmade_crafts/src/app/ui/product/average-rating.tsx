import { calculateProductRating } from "@/app/lib/online-data"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/outline";
export default async function ProductRating(id: string) {
    const data = await calculateProductRating(id);
    const average_rating = data.average_value;

    if (average_rating >= 1 && average_rating < 1.5) {
        return (
            <div className="flex flex-row">
                <StarSolid />
                <StarOutline />
                <StarOutline />
                <StarOutline />
                <StarOutline />
            </div>
        );
    } else if (average_rating >= 1.5 && average_rating < 2.5) {
        return (
            <div className="flex flex-row">
                <StarSolid />
                <StarSolid />
                <StarOutline />
                <StarOutline />
                <StarOutline />
            </div>
        );
    } else if (average_rating >= 2.5 && average_rating < 3.5) {
        return (
            <div className="flex flex-row">
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarOutline />
                <StarOutline />
            </div>
        );
    } else if (average_rating >= 3.5 && average_rating < 4.5) {
        return (
            <div className="flex flex-row">
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarOutline />
            </div>
        );
    } else if (average_rating >= 4.5) {
        return (
            <div className="flex flex-row">
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarSolid />
            </div>
        );
    }
}