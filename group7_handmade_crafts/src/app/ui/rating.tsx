import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import { StarIcon as StarSolid } from "@heroicons/react/16/solid"
import LikeButton from './like-button';

export default function Rating({
    name,
    title, 
    text, 
    rating_value}:{
        name: string,
        title: string,
        text: string,
        rating_value: number
    }) {
        const solidStars = rating_value
        const emptyStars = 5 - rating_value

    return (
        <div className='m-3 p-2 bg-white'>
            <p className='font-bold'>{name}</p>
            <div className='flex flex-row justify-between'>
               <p>{title}</p>
                <div className="flex flex-row">
                    {[...Array(solidStars)].map(star => {
                        return <StarSolid className='w-5 h-5 text-amber-500'/>
                    })}
                    {[...Array(emptyStars)].map(star => {
                        return <StarOutline className='w-5 h-5 text-amber-500' />
                    })}
                </div>
            </div>
            <p className='flex flex-grow'>{text}</p>
            <LikeButton />
        </div>
    )
}