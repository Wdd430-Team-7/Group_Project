import { sql } from "@vercel/postgres";
import { Account, Category, Product, ProductsTable } from "./definitions";

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
        throw new Error(`Failed to fetch user data. ${error}`);
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

export async function fetchProductByArtist(artist_id: string) {
    try {
        const data = await sql<Product>`SELECT * FROM handcrafted.product WHERE artist_id = ${artist_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch products by artist.');
    }
}

export async function fetchProductsByCategory(category_id: number) {
    try {
        const data = await sql`SELECT * FROM handcrafted.product p WHERE category_id = ${category_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch products by category.');
    }
}

export async function fetchRecentRatings(limit: number) {
    try {
        // returns recent ratings by limit
        const data = await sql`SELECT r.rating_id, r.rating_title, r.rating_review_text, r.rating_value, p.product_title, p.product_id, p.product_image, a.account_firstname, a.account_lastname, a.account_id 
        FROM handcrafted.rating r 
        INNER JOIN handcrafted.product p ON r.product_id = p.product_id 
        INNER JOIN handcrafted.account a ON a.account_id = p.artist_id 
        ORDER BY r.rating_timestamp DESC LIMIT ${limit}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch recent ratings.');
    }
}

export async function fetchRatingsByProduct(product_id: string) {
    try {
        // returns rating title, text, rate value, reviewer account data by product_id
        const data = await sql`SELECT r.rating_id, r.rating_title, r.rating_review_text, r.rating_value, r.product_id, r.rating_reviewer, to_char(r.rating_timestamp, 'DD Mon YYYY, HH12:MI AM') AS rating_timestamp FROM handcrafted.rating r INNER JOIN handcrafted.product p ON r.product_id = p.product_id WHERE r.product_id = ${product_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch product ratings.');
    }
}

export async function calculateProductRating(product_id: string) {
    try {
        const data = await sql`SELECT ROUND(AVG(rating_value), 1) AS average_value, COUNT(*) AS num_ratings FROM handcrafted.rating WHERE product_id = ${product_id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to calculate product rating.');
    }
}



export async function fetchFeaturedArtistsLimited(limit: number) {
    try {
        // returns artist_id, artist_firstname, artist_lastname
        const data = await sql<Account>`SELECT * FROM handcrafted.account ORDER BY account_id ASC LIMIT ${limit}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch featured artists.');
    }
}

export async function fetchNewProducts(limit: number) {
    try {
        const data = await sql`SELECT 
                                    p.product_id, 
                                    p.product_title, 
                                    p.product_description, 
                                    p.product_image, 
                                    p.product_price,
                                    a.account_firstname,
                                    a.account_lastname,
                                    a.account_id
                                FROM handcrafted.product p
                                INNER JOIN handcrafted.account a
                                ON a.account_id = p.artist_id
                                ORDER BY product_date_created DESC LIMIT ${limit}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch new products.');
    }
}

export async function fetchProductsCategoryArtist() {
    try {
        const data = await sql`SELECT 
                                    p.product_id, 
                                    p.product_title, 
                                    p.product_description, 
                                    p.product_image, 
                                    p.product_price,
                                    a.account_firstname,
                                    a.account_lastname,
                                    a.account_id,
                                    c.category_name
                                FROM handcrafted.product p
                                INNER JOIN handcrafted.account a
                                ON a.account_id = p.artist_id
                                INNER JOIN handcrafted.category c
                                ON c.category_id = p.category_id`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch new products.');
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
//   noStore(); // what does this do again?
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql<ProductsTable>`
      SELECT
        p.product_id,
        p.product_title,
        p.product_description,
        p.product_image,
        p.product_price,
        p.category_id,
        p.artist_id,
        c.category_name,
        a.account_firstname,
        a.account_lastname
      FROM handcrafted.product p
      JOIN handcrafted.account a ON p.artist_id = a.account_id
      JOIN handcrafted.category c ON p.category_id = c.category_id
      WHERE
        (p.product_title ILIKE ${`%${query}%`} OR
        p.product_description ILIKE ${`%${query}%`} OR
        c.category_name ILIKE ${`%${query}%`} OR
        a.account_firstname ILIKE ${`%${query}%`} OR
        a.account_lastname ILIKE ${`%${query}%`}) 
      ORDER BY p.product_date_created DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered products.');
  }
}

export async function fetchFilteredProductsByCategory(
    query: string,
    currentPage: number,
    category: number,
  ) {
  //   noStore(); // what does this do again?
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {  
      const products = await sql<ProductsTable>`
        SELECT
          p.product_id,
          p.product_title,
          p.product_description,
          p.product_image,
          p.product_price,
          p.category_id,
          p.artist_id,
          c.category_name,
          a.account_firstname,
          a.account_lastname
        FROM handcrafted.product p
        JOIN handcrafted.account a ON p.artist_id = a.account_id
        JOIN handcrafted.category c ON p.category_id = c.category_id
        WHERE
          (p.product_title ILIKE ${`%${query}%`} OR
          p.product_description ILIKE ${`%${query}%`} OR
          c.category_name ILIKE ${`%${query}%`} OR
          a.account_firstname ILIKE ${`%${query}%`} OR
          a.account_lastname ILIKE ${`%${query}%`}) 
          AND c.category_id = ${category}
        ORDER BY p.product_date_created DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      return products.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch filtered products by category.');
    }
  }
