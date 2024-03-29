import Header from "../../../../../ui/header";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/online-data";
import ProductRating from "@/app/ui/product/average-rating";
import FormReviews from "@/app/ui/product/formReview";
import { fetchAccounts } from "@/app/lib/online-data";

export default async function AddReviews({
  params,
}: {
  params: { id: string; buyer: string };
}) {
  const { id, buyer } = params;
  //const name = params.item

  //const productSelected = await fetchProductById(id);

  //const accounts = await fetchAccounts();
  //console.log(accounts);
  console.log(buyer);

  return (
    <>
      <div>
        <FormReviews id={id} />
      </div>
    </>
  );
}
