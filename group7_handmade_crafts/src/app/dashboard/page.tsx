import { Metadata } from "next";
import Image from "next/image";
import ArtistCard from "../ui/dashboard/artist";
import Stories from "../ui/dashboard/stories";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl text-center">Dashboard</h1>
      <div className="flex flex-col items-center gap-4">
        <ArtistCard />
        <Stories />
      </div>
    </main>
  );
}
