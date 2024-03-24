import {fetchProductFromDB} from '@/app/lib/data';
export default async function Product(){
  const products = await fetchProductFromDB();
  console.log(products);
  return <>{products.map((product) => (
    <li key={product.product_id}>{product.product_title} </li>
     
  ))}</>
  
}