import { sql } from "@vercel/postgres";
import { Account, Category, Product, Rating, Story } from "./definitions";

export async function fetchAccounts() {
    try {
        const data = await sql<Account>`SELECT * FROM handcrafted.account`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch users data.');
    }
}

export async function fetchAccountById(id: string) {
    try {
        const data = await sql<Account>`SELECT * FROM handcrafted.account WHERE account_id = ${id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to fetch user data.');
    }
}

export async function fetchCategories() {
    try {
        const data = await sql<Category>`SELECT * FROM handcrafted.category`;
        return data.rows;
    } catch(error) {
        console.error('Error fetching categories:', error);
        throw new Error('Something went wrong.');
    }
}

export async function fetchCategoryName(id: number) {
    try {
        const data = await sql`SELECT category_name FROM handcrafted.category WHERE category_id = ${id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to fetch category name.');
    }
}

export async function fetchTopFiveProducts() {
    try {
        // not a good top five fetch since it's only based on product id, but just for now
        const data = await sql<Product>`SELECT * FROM handcrafted.product ORDER BY product_id ASC LIMIT 5`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch top five products.');
    }
}

export async function fetchAllProducts() {
    try {
        const data = await sql<Product>`SELECT * FROM handcrafted.product`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch all products.');
    }
}

export async function fetchProductById(id: string) {
    try {
        const data = await sql<Product>`SELECT * FROM handcrafted.product WHERE product_id = ${id}`;
        return data.rows[0];
    } catch (error) {
        throw new Error('Failed to fetch product by id.');
    }
}

export async function fetchProductsByCategory(category_id: number) {
    try {
        const data = await sql<Product>`SELECT * FROM handcrafted.product WHERE category_id = ${category_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch products by category.');
    }
}

export async function fetchTopRatings(limit: number) {
    try {
        // returns highest ratings up to limit
        const data = await sql<Rating>`SELECT * FROM handcrafted.rating ORDER BY rating_value ASC LIMIT ${limit}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch top ratings.');
    }
}

export async function fetchRatingsByProduct(product_id: string) {
    try {
        // returns rating title, text, rate value, reviewer account data by product_id
        const data = await sql`SELECT r.rating_title, r.rating_review_text, r.rating_value, r.buyer_id FROM handcrafted.rating r INNER JOIN handcrafted.product p ON r.product_id = p.product_id INNER JOIN handcrafted.account a ON a.account_id = r.buyer_id WHERE r.product_id = ${product_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch product ratings.');
    }
}

export async function calculateProductRating(product_id: string) {
    try {
        const data = await sql`SELECT ROUND(AVG(rating_value), 1) AS average_value FROM handcrafted.rating WHERE product_id = ${product_id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to calculate product rating.');
    }
}