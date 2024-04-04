'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    product_id: z.string(),
    product_title: z.string(),
    product_description: z.string(),
    product_price: z.coerce.number(),
    product_image: z.string(),
    category_id: z.string(),

});

const UpdateProduct = FormSchema.omit({ product_id: true });

// This is temporary until @types/react-dom is updated
export type State = {
    errors?: {
        product_title?: string[];
        product_description?: string[];
        product_image?: string[];
        category_id?: string[];
        product_price?: string[];
    };
    message?: string | null;
  };

export async function updateProduct(id: string, prevState: State, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = UpdateProduct.safeParse({
        product_title: formData.get('product_title'),
        product_description: formData.get('product_description'),
        product_price: formData.get('product_price'),
        product_image: formData.get('product_image'),
        category_id: formData.get('category_id'),
    });

    // if form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    // prepare data for updating into the database
    const { product_title, product_description, product_price, product_image, category_id } = validatedFields.data;

    // insert data into database

    try {
        await sql`
            UPDATE handcrafted.product
            SET product_title = ${product_title}, product_description = ${product_description}, product_price = ${product_price}, product_image = ${product_image}, category_id = ${category_id}
            WHERE product_id = ${id}
        `;    
    } catch (error) {
        return {
            message: 'Database Error: Failed to update product.',
        };
    }

    revalidatePath('/dashboard/products');
    revalidatePath('/dashboard/products/edit/[id]', 'page');
    revalidatePath('/product/details/[id]', 'page');
    revalidatePath('/');
    redirect('/dashboard/products/');
}

export async function deleteProduct(id: string) {
    try {
        await sql`
            DELETE FROM handcrafted.product
            WHERE product_id = ${id}
        `;        
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete product.',
        };
    }

    revalidatePath('/dashboard/products');
    revalidatePath(`/category/[id]`, 'page');
    revalidatePath('/');
}