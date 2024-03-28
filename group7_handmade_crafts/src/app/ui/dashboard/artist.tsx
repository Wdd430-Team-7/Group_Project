import Image from "next/image";

export default function ArtistCard() {
    return (
        <div className="flex flex-col items-center gap-2 bg-amber-100 p-4">
            <h3 className="font-bold">Artist Name</h3>
            <Image 
                src={"/images/users/no_image.jpg"}
                width={200}
                height={200}
                alt="Artist Profile"
                className="rounded-md"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt commodi odio voluptas iusto eveniet, blanditiis repudiandae. Minus doloremque ad, nobis quam optio odit esse tempore excepturi. Dicta voluptate necessitatibus ducimus.</p>
        </div>
    );
}