import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row flex-wrap md:justify-between items-center bg-amber-400 p-4">
            <p className="text-black text-center">COPYRIGHT 2024 - WDD430 - TEAM SEVEN</p>
            <div className="flex flex-row flex-wrap gap-4">
                <a href="https://www.facebook.com" className="flex flex-row gap-2"><p className="hidden md:block text-black hover:text-gray-500">Facebook</p><Image src="/images/317727_facebook_social media_social_icon.png" width={21} height={21} alt="White F against blue background" className="aspect-square md:hidden"/></a>
                <a href="https://www.instagram.com" className="flex flex-row gap-2"><p className="hidden md:block text-black hover:text-gray-500">Instagram</p><Image src="/images/6929237_instagram_icon.png" width={21} height={21} alt="camera outline against psychedelic background" className="aspect-square md:hidden"/></a>
                <a href="https://www.x.com" className="flex flex-row gap-2"><p className="hidden md:block text-black hover:text-gray-500">X</p><Image src="/images/11244080_x_twitter_elon musk_twitter new logo_icon.png" width={21} height={21} alt="X-shaped icon" className="aspect-square md:hidden"/></a>
            </div>
        </footer>
    );
}