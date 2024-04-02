import { sql } from "@vercel/postgres";
import { Account, Category, Product, ProductsTable } from "./definitions";
import { revalidatePath } from "next/cache";

export async function fetchStoriesById(artist_id: string) {
    try {
        const data = await sql`SELECT * FROM handcrafted.story WHERE artist_id = ${artist_id} ORDER BY story_date DESC`;
        return data.rows;
    } catch (error) {
        throw new Error("Failed to fetch stories by artist id: " + error);
    }
}

export async function fetchStoriesByIdLimited(artist_id: string, limit: number) {
    try {
        const data = await sql`SELECT * FROM handcrafted.story WHERE artist_id = ${artist_id} ORDER BY story_date DESC LIMIT ${limit}`;
        return data.rows;
    } catch (error) {
        throw new Error("Failed to fetch stories by artist id limited: " + error);
    }
}