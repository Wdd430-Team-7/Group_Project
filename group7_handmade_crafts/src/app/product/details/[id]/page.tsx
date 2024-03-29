import Header from "../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";
import RatingItem from "@/app/ui/product/ratingbyProduct";
import { fetchRatingsByProduct } from "@/app/lib/online-data";
import { QueryResultRow } from "pg";
import Link from "next/link";
import { StringValidation } from "zod";

export default async function ProductDetail({params}:{
  params:{id: string, item:string}}){


  const {id, item} = params;
  console.log(id, item)

  const productSelected = await fetchProductById(id);

  const ratingsProductRaw = await fetchRatingsByProduct(id);
  
  interface ProductRating {
    rating_id: string;
    rating_title: string;
    rating_review_text: string;
    rating_value: number;
    rating_reviewer: string;
    product_id: string;
    product_title: string;
    artist_id: string;
    account_firstname: string;
    account_lastname: string;
    account_image: string;
  }

  interface RatingProps{
    ratings: ProductRating[];
  }

  const ratingsProduct: ProductRating[] = ratingsProductRaw.map((row: QueryResultRow) => ({
    rating_id: row.rating_id as string,
    rating_title: row.rating_title as string,
    rating_review_text: row.rating_review_text as string,
    rating_value: parseInt(row.rating_value as string, 10), 
    rating_reviewer: row.rating_reviewer as string,
    product_id: row.product_id as string,
    product_title: row.product_title as string,
    artist_id: row.artist_id as string,
    account_firstname: row.account_firstname as string,
    account_lastname: row.account_lastname as string,
    account_image: row.account_image as string
  }));

  return(
    <>
  
    
    
      <div className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto bg-amber-100 mt-10">
          <div className="mx-auto flex flex-wrap space-x-20 justify-center">

          <Image  className="object-center rounded border border-gray-200" src={`${productSelected.product_image}`} alt="" width={400} height={400}/>
            <div className="text-center mt-10">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productSelected.product_title}</h1>
              <ProductRating id={productSelected.product_id} />
              <p className="leading-relaxed">{productSelected.product_description}</p>
              
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${productSelected.product_price}</span>
                <button className="flex ml-auto text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col container px-5 py-5 mx-auto bg-white mt-10">
                    <h2 className="text-center text-gray-900 text-2xl title-font font-medium mb-1">write a review about this product</h2>
                    
                    <p className="text-center">Share your opinion with other artisans</p>
                    <Link href={`/product/details/${productSelected.product_id}/reviews/${productSelected.artist_id}`} className="mr-auto ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-400 rounded">write your opinion</Link>
                    
        </div>
        
      
        
        <div className="flex flex-col container px-5 py-24 mx-auto bg-amber-100 mt-10">
    
              
                <RatingItem ratings={ratingsProduct} />
                   
        </div>
        
      </div>
     
      
      
      



</>  
  )}
