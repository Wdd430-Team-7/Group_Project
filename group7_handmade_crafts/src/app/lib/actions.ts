'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { IdentificationIcon } from '@heroicons/react/24/outline';


const FormSchema = z.object({
  rating: z.coerce.number(),
  title: z.string(),
  review: z.string(),
  reviewer: z.string(),
  id: z.string(),
});

//const CreateReview = FormSchema;

export async function createReview(formData:FormData){
  const {rating, title, review, reviewer, id}= FormSchema.parse({
    rating: formData.get('rating'),
    title: formData.get('title'),
    review: formData.get('review'),
    reviewer: formData.get('reviewer'),
    id: formData.get('id'),
  });


  
  try{
    await sql `INSERT INTO handcrafted.rating (rating_title, rating_review_text, rating_value, rating_reviewer, product_id)
     VALUES (${title}, ${review}, ${rating}, ${reviewer}, ${id})`;
    
    console.log("success!!!")
    //redirect('/product/all');

  }catch(error){
    console.error(error)
  }

  
  revalidatePath(`/product/details/${id}`);
  revalidatePath(`/product/all`);
  revalidatePath(`/`);
  redirect('/product/all');
  

}