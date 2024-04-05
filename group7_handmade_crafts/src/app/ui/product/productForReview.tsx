import React from "react";
import Image from "next/image";
import {Product} from "@/app/lib/definitions";


export default function ProductToReview({product}:{product:Product}) {

  const productForReview = product;
 
  
    return(
        <div className="container px-5 py-5 mx-auto max-w-2xl bg-amber-100">
            <div className="mx-auto flex flex-row space-x-20 justify-center">
            <Image className="object-center rounded border border-gray-200" src={`${productForReview.product_image}`} alt="" width={100} height={100}/>
              <div className="mt-10">
                <p className="leading-relaxed">{productForReview.product_description}</p>     
              </div>
            </div>
        </div>
     
     

      )
    
      
}