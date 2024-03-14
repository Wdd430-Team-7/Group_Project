import Image from "next/image";
import Header from "./ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col">
        <div className="flex justify-center p-4 m-4 bg-amber-100">
          {/* Isaac */}
          Hero Image | Search
        </div>
        <div className="flex flex-row p-4 mx-4 justify-center bg-amber-100">
          New Items
          {/* Lourenco */}
        </div>
        <div className="flex flex-row p-4 mb-4 justify-center gap-4">
          <div className="bg-amber-100 p-4 flex-grow">
            Reviews
            {/* Moises */}
          </div>
          <div className="bg-amber-100 p-4 flex-grow">
            Featured Artists
            {/* Moises */}
          </div>
        </div>
      </main>
      <footer className="w-full bg-amber-400 p-4 text-center">
        <p>Footer</p>
      </footer>
    </>
  );
}
