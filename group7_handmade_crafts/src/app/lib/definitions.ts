import { QueryResultRow } from "pg";

export type Account = {
    account_id: string;
    account_firstname: string;
    account_lastname: string;
    account_email: string;
    account_password: string;
    account_image: string;
    account_authenticated: number;
    account_description: string;
    account_bio: string;
    account_age: number;
    account_imageUrl: string;
};

export type Category = {
    category_id: number,
    category_name: string,
    category_icon: string
};

export type Product = {
    map(arg0: (row: QueryResultRow) => { product_id: string; row: QueryResultRow; "": string; rating_review_text: string; rating_value: number; rating_timestamp: string; rating_reviewer: string; }): Product;
    product_id: string,
    product_title: string,
    product_description: string,
    product_image: string,
    product_price: number,
    category_id: number,
    artist_id: string,
    product_date_created: Date,
};

export type Rating = {
    rating_id: string,
    rating_title: string,
    rating_review_text: string,
    rating_value: number,
    buyer_id: string,
    product_id: string,
    rating_timestamp: Date
}

export type Story = {
    story_id: string,
    story_content: string,
    story_date: Date,
    artist_id: string
}

export type ProductsTable = {
    product_id: string,
    product_title: string,
    product_description: string,
    product_image: string,
    product_price: number,
    category_id: number,
    artist_id: string,
    category_name: string,
    account_firstname: string,
    account_lastname: string,
}