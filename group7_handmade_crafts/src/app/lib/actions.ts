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

// stories

const CreateStorySchema = z.object({
  story_id: z.string(),
  story_content: z.string()
    .min(1, { message: 'Please write at least one character.'}),
  story_date: z.date(),
  artist_id: z.string(),
});

const CreateStory = CreateStorySchema.omit({ story_id: true, story_date: true });

export async function createStory(formData: FormData) {
  // Validate form fields using Zod
  // const validatedFields = CreateStorySchema.safeParse({
  //   artist_id: formData.get('artist_id'),
  //   story_content: formData.get('story_content'),
  // });

  // If form validation fails, return errors early. Otherwise, continue.
  // if (!validatedFields.success) {
  //     return {
  //       errors: validatedFields.error.flatten().fieldErrors,
  //       message: 'Missing Fields. Failed to Create Invoice.',
  //     };
  //   }

  // prepare data for insertion into the database
  // const { artist_id, story_content } = validatedFields.data;

  // insert data into database

  const { artist_id, story_content} = CreateStory.parse({ 
    artist_id: formData.get('artist_id'),
    story_content: formData.get('story_content')
  });

  await sql`
    INSERT INTO handcrafted.story (artist_id, story_content)
    VALUES (${artist_id}, ${story_content})
  `;

  // try {
  //     await sql`
  //         INSERT INTO handcrafted.story (artist_id, story_content)
  //         VALUES (${artist_id}, ${story_content})
  //     `;    
  // } catch (error) {
  //     return {
  //         message: 'Database Error: Failed to create story.',
  //     };
  // }
  
  revalidatePath('/dashboard/stories');
  revalidatePath('/dashboard/');
  redirect('/dashboard/stories');
}