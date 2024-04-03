import { Metadata } from "next";
import Image from "next/image";
import ArtistCard from "../ui/dashboard/artist";
import Stories from "../ui/dashboard/stories/stories";
import Reviews from "../ui/dashboard/reviews";
import { fetchAccountById } from "../lib/online-data";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
 
  const account_id = 'b222d544-c5aa-4558-b4a6-74cd8e088afd'
  //John Cenamics
  // const account_id = 'b222d544-c5aa-4558-b4a6-74cd8e088afd' 
  const account = await fetchAccountById(account_id);
  const name = account.account_firstname + " " + account.account_lastname;
  const description = account.account_description;
  const image = account.account_image;
  return (
    <div>
      <h2 className="mb-4 text-xl md:text-2xl dark:text-amber-500 font-bold text-center">{`Welcome, ${name}!`}</h2>
      <div className="flex flex-col items-center gap-4">
        <ArtistCard image={image} name={name} description={description}/>
        <h3 className="font-bold p-2 dark:text-amber-500 rounded-md w-fit self-start">LATEST STORIES</h3>

        <Stories id={account_id}/>
        <a href="/dashboard/stories" className="px-4 py-2 rounded-md bg-amber-500 text-black hover:bg-amber-400 self-center">Manage Stories</a>

        <Reviews id={account_id}/>
      </div>
    </div>
  );
}
