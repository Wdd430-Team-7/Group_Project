'use client';

import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/16/solid';
import { useState } from 'react';

export default function LikeButton() {
    const [like, setLike] = useState(false);

    function handleLike(like: boolean) {
        setLike(!like);
    }
    
    return (
        <button className='mt-2' onClick={() => handleLike(like)}>{like ? <HeartSolid className='w-5 h-5 text-red-500' /> : <HeartOutline className='w-5 h-5 text-red-500' />}</button>
    )
}