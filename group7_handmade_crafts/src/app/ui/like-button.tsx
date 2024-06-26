'use client';

import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/16/solid';
import { useState } from 'react';

export default function LikeButton() {
    const [Like, setLike] = useState(293),
    [isLike, setIsLike] = useState(false)

    function handleLike() {
        setLike(Like + (isLike ? -1 : 1));
        setIsLike(!isLike);
    }
    
    return (
        
        <button className='mt-2 text-gray-500' onClick={() => handleLike()}>{isLike ? <HeartSolid className='w-5 h-5 text-red-500' /> : <HeartOutline className='w-5 h-5 text-red-500' />}{Like}</button>
        
    )
}