import Header from "@/app/ui/header";
import { patrick_hand, lato } from "@/app/ui/fonts";


export default function Page() {
  return (
    <>
        <Header />
      <div className={`${lato.className} flex justify-center text-black bg-white min-h-screen text-3xl`}>
        Products by Category
      </div>
    </>
  );
}
