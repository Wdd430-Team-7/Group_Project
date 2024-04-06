import Header from "../../../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";
import FormReviews from "@/app/ui/product/formReview";
import ProductToReview from "@/app/ui/product/productForReview"
import {Product} from "@/app/lib/definitions";
import { patrick_hand, lato } from "@/app/ui/fonts";



export default async function AddReviews({params,}:{
  params:{id: string, buyer: string}}){

  const {id, buyer} = params;
  //const name = params.item
  

  const productSelected = await fetchProductById(id);
  // console.log(productSelected);

 
  return(
    <div className="text-black bg-white pt-20">
      
        <ProductToReview product = {productSelected}/>
        <FormReviews id={id} />
      
    </div>

  )}