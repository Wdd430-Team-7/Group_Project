
import Link from "next/link";
import { fetchCategories } from "../lib/online-data";
import FooterCategory from "./footer-category";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default async function Footer() {
    const categoriesList = await fetchCategories();

    return (
        <footer className="bg-amber-400 p-4">
            <div className="flex flex-col gap-5 py-5 md:flex-row md:justify-evenly md:gap-0">
                <div>
                    <FooterCategory categories={categoriesList} />
                </div>
                <div>
                    <p className="pb-2">Find out more on our socials</p>
                    <div>
                        <Link href="https://facebook.com" className="flex flex-row pb-2 items-end gap-1 hover:text-amber-700" ><FaSquareFacebook className="w-8 h-8" /><p>Facebook</p></Link>
                        <Link href="https://instagram.com" className="flex flex-row pb-2 items-end gap-1 hover:text-amber-700" ><FaInstagram className="w-8 h-8" />Instagram</Link>                   
                        <Link href="https://youtube.com" className="flex flex-row pb-2 items-end gap-1 hover:text-amber-700" ><FaYoutube className="w-8 h-8" />YouTube</Link> 
                    </div>                  
                </div>
            </div>
            <p className="text-black text-center">COPYRIGHT 2024 - WDD430 - TEAM SEVEN</p>
        </footer>
    );
}