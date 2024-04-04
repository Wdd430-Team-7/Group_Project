import { Metadata } from "next";
import Image from "next/image";
import ArtistCard from "../ui/dashboard/artist";
import Stories from "../ui/dashboard/stories/stories";
import Reviews from "../ui/dashboard/reviews";
import { fetchAccountByEmail } from "../lib/online-data";
import { auth } from "../../../auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await auth()
  const email = session?.user?.email
  const account = await fetchAccountByEmail(email);
  if (account) {
    const account_id = account.account_id
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
  
          <Reviews />
        </div>
      </div>
    );
  } else {
    return (
          <div>
            <p>You are not allowed access. Please login with authorized credentials.</p>
            <a href="/login" className="px-4 py-2 text-sm bg-gray-50">Login</a>
          </div>
        );
  }
}
