import Header from "../../../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";
import FormReviews from "@/app/ui/product/formReview";
import ProductToReview from "@/app/ui/product/productForReview"
import {Product} from "@/app/lib/definitions";



export default async function AddReviews({params,}:{
  params:{id: string, buyer: string}}){

  const {id, buyer} = params;
  //const name = params.item
  

  const productSelected = await fetchProductById(id);
  console.log(productSelected);

 
  return(
    <>
    
    <Header/>

    <div className="text-black bg-white">
      <ProductToReview product = {productSelected}/>
      <FormReviews id={id} />
    </div>
      
    <footer className="w-full bg-amber-400 p-4 text-center">
            <p>Footer</p>
    </footer>



</>  
  )}