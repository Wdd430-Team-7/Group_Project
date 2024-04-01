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

const StoryFormSchema = z.object({
  story_content: z.string().min(1),
  artist_id: z.string(),
});

export type State = {
  errors?: {
    story_content?: string[];
    artist_id?: string[];
  };
  message?: string | null;
};

export async function createStory(prevState: State, formData: FormData) {
  const validatedStoryFields = StoryFormSchema.safeParse({
    story_content: formData.get('story_content'),
    artist_id: formData.get('artist_id'),
});

  if (!validatedStoryFields.success) {
    return {
      errors: validatedStoryFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create story.',
    };
  }

  const { story_content, artist_id } = validatedStoryFields.data;

  try {
    await sql`INSERT INTO handcrafted.story (story_content, artist_id) VALUES (${story_content}, ${artist_id})`;
    // console.log(result); IT WORKS!
  } catch (error) {
    return {
      message: 'Database error: Failed to create story.'
    }
  }

  revalidatePath('/dashboard/stories');
  redirect('/dashboard/stories');
}