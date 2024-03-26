import Header from "../../../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";
import FormReviews from "@/app/ui/product/formReview";


export default async function AddReviews({params,}:{
  params:{id: string, item: string}}){

  

  const {id, item} = params;
  //const name = params.item
  console.log(id, item)

  const productSelected = await fetchProductById(id)


  return(
    <>
    
    <Header/>
    
    <div><FormReviews/></div>
      
    <footer className="w-full bg-amber-400 p-4 text-center">
            <p>Footer</p>
    </footer>



</>  
  )}