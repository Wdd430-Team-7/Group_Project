import { fetchAllProducts } from "@/app/lib/online-data";
export default async function Product(){
  const products = await fetchAllProducts();
  console.log(products);
  return <>{products.map((product) => (
    <li>{product.product_title} </li>
     
  ))}</>
  
}


