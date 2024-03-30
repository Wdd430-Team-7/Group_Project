import Image from "next/image";

export default function ArtistCard({ image, name, description } : { image: string, name: string, description: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-begin gap-4 p-4">
      <Image
        src={image}
        width={150}
        height={150}
        alt="Artist Profile"
        className="rounded-md"
      />
      <div className="flex flex-col justify-center md:justify-begin">
        <h3 className="font-bold dark:text-amber-500">{name}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
