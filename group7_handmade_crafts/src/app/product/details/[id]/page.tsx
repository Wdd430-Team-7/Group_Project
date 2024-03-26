import Header from "../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";

export default async function ProductDetail({params}:{
  params:{id: string, item:string}}){


  const {id, item} = params;
  console.log(id, item)

  const productSelected = await fetchProductById(id);

  return(
    <>
  
    <Header/>
    
      <div className="text-gray-700 body-font overflow-hidden bg-white h-dvh">
        <div className="container px-5 py-24 mx-auto bg-amber-100 mt-10">
          <div className="mx-auto flex flex-wrap space-x-20 justify-center">
          <Image  className="object-center rounded border border-gray-200" src={`${productSelected.product_image}`} alt="" width={400} height={400}/>
            <div className="text-center mt-10">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productSelected.product_title}</h1>
              <ProductRating id={productSelected.product_id} />
              <p className="leading-relaxed">{productSelected.product_description}</p>
              
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${productSelected.product_price}</span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-amber-400 p-4 text-center">
              <p>Footer</p>
      </footer>



</>  
  )}
