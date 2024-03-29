import { Metadata } from "next";
import Image from "next/image";
import ArtistCard from "../ui/dashboard/artist";
import Stories from "../ui/dashboard/stories";
import Reviews from "../ui/dashboard/reviews";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl text-center">Dashboard</h1>
      <div className="flex flex-col items-center gap-4">
        <ArtistCard />
        <Stories />
        <Reviews />
      </div>
    </div>
  );
}
