'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { IdentificationIcon } from '@heroicons/react/24/outline';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

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
  revalidatePath('/dashboard');
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

  const { artist_id, story_content } = CreateStory.parse({ 
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
  revalidatePath('/artist/[id]', 'page');
  revalidatePath('/');
  redirect('/dashboard/stories');
}

const CreateProductSchema = z.object({
  product_id: z.string(),
  product_title: z.string().min(3),
  product_description: z.string().min(3),
  product_category: z.coerce.number(),
  product_price: z.coerce.number(),
  product_image: z.string(), // check what the default image url is in pgAdmin
  artist_id: z.string(),
});

const CreateProduct = CreateProductSchema.omit({ product_id: true });

export async function createProduct(formData: FormData) {
  const { 
    product_title, 
    product_description, 
    product_price,
    product_category, 
    product_image,
    artist_id, 
  } = CreateProduct.parse({
    product_title: formData.get("product_title"),
    product_description: formData.get("product_description"),
    product_price: formData.get("product_price"),
    product_category: formData.get("product_category"),
    product_image: formData.get("product_image"),
    artist_id: formData.get("artist_id"),
  });

  try {
    await sql`
    INSERT INTO handcrafted.product (
      product_title,
      product_description,
      product_price,
      product_image,
      category_id,
      artist_id
    )
    VALUES (
      ${product_title},
      ${product_description},
      ${product_price},
      ${product_image},
      ${product_category},
      ${artist_id}
    )
  `;
  
  } catch (error) {
    console.error('Error inserting new product: ' + error)    
  }
  
  revalidatePath('/dashboard/products');
  revalidatePath(`/categories/[id]`, 'page');
  revalidatePath('/');
  redirect('/dashboard/products');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}