'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { IdentificationIcon } from '@heroicons/react/24/outline';

const FormSchema = z.object({
  rating: z.coerce.number(),
  title: z.string(),
  review: z.string(),
  id: z.string(),
});

//const CreateReview = FormSchema;

export async function createReview(formData:FormData){
  const {rating, title, review, id}= FormSchema.parse({
    rating: formData.get('rating'),
    title: formData.get('title'),
    review: formData.get('review'),
    id: formData.get('id'),
  });

  
  const buyerId = uuidv4();

  console.log(rating, title, review, buyerId, id);


  await sql `INSERT INTO handcrafted.rating (rating_title, rating_review_text, rating_value, buyer_id, product_id)
     VALUES (${title}, ${review}, ${rating}, ${buyerId}, ${id})`;

  
  revalidatePath('/product/all');
  redirect('/product/all');
}