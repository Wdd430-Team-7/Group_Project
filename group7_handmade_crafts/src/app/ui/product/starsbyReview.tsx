import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const StarsRatingbyReview: React.FC<{ rating: number; }> = ({ rating }) => {
    // Lógica para mostrar el rating de la review

    
        if (rating === 1) {
            return (
                <div className="flex flex-row">
                    <StarSolid className="w-5 h-5 text-amber-500"/>
                    <StarOutline className="w-5 h-5 text-amber-500"/>
                    <StarOutline className="w-5 h-5 text-amber-500"/>
                    <StarOutline className="w-5 h-5 text-amber-500"/>
                    <StarOutline className="w-5 h-5 text-amber-500"/>
                </div>
    );
    }else if (rating === 2) {
        return (
            <div className="flex flex-row">
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarSolid className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
                <StarOutline className="w-5 h-5 text-amber-500"/>
            </div>
);
}else if (rating === 3) {
    return (
        <div className="flex flex-row">
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarOutline className="w-5 h-5 text-amber-500"/>
            <StarOutline className="w-5 h-5 text-amber-500"/>
        </div>
);
}else if (rating === 4) {
    return (
        <div className="flex flex-row">
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarSolid className="w-5 h-5 text-amber-500"/>
            <StarOutline className="w-5 h-5 text-amber-500"/>
        </div>
);
}else if (rating === 5) {
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
    
export default StarsRatingbyReview;
    
