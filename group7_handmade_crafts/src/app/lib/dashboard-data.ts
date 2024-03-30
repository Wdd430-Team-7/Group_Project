import { sql } from "@vercel/postgres";
import { Account, Category, Product, ProductsTable } from "./definitions";

export async function fetchStoriesById(artist_id: string) {
    try {
        const data = await sql`SELECT * FROM handcrafted.story WHERE artist_id = ${artist_id}`;
        return data.rows;
    } catch (error) {
        throw new Error("Failed to fetch stories by artist id: " + error);
    }
}