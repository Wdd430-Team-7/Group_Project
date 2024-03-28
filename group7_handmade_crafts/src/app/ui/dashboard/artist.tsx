import Image from "next/image";

export default function ArtistCard() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-begin gap-4 bg-amber-100 p-4">
      <Image
        src={"/images/users/no_image.jpg"}
        width={150}
        height={150}
        alt="Artist Profile"
        className="rounded-md"
      />
      <div className="flex flex-col justify-center md:justify-begin">
        <h3 className="font-bold">Artist Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          commodi odio voluptas iusto eveniet, blanditiis repudiandae. Minus
          doloremque ad, nobis quam optio odit esse tempore excepturi. Dicta
          voluptate necessitatibus ducimus.
        </p>
      </div>
    </div>
  );
}
