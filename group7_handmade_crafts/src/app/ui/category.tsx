'use client'
import Link from "next/link";
import { patrick_hand, inter } from "./fonts";
import React from "react";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

//import { CategoryType } from './types'; // Asegúrate de importar la interfaz CategoryType desde el archivo correcto
interface CategoryType {
  category_id: number,
  category_name: string,
  category_icon: string

}

interface CategoryProps {
  categories: CategoryType[];
}

const Category: React.FC<CategoryProps> = ({ categories }) => {
  
  const pathname = usePathname();

  return(
    categories.map((category:CategoryType)=>(

      <Link key={category.category_id}
      href={`/category/${category.category_id}`}
      className={clsx(
        "px-4 py-2 rounded-md hover:bg-amber-400 hover:text-black",
        {
          "text-green-600": pathname === `/category/${category.category_id}`,
        },
      )}
      >
       
        <p className="md:hidden text-2xl">{category.category_icon}</p>
        <p className="hidden md:block">{category.category_name}</p>
        
      </Link>
      
      
    ))


  )


  /*
      categories.map((category:CategoryType) => {
        //const LinkIcon = category.icon;
        return (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="bg-white px-4 py-2 rounded-md hover:bg-amber-200 text-black"
          >
          <p className="md:hidden text-2xl">{category.icon}</p>
          <p className="hidden md:block">{category.name}</p>
          </Link>
        );
      })
    */

};

export default Category;



/*
interface Nombre{
  name: string;
}

interface CategoryType {
  
  id: string;
  name: string;
  icon: string;

}



export default async function Category(categories: CategoryType[]) {
  
  return (

    
      <ul>
        {categories.map((category)=>(
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>*/
    


    /*
    <>

      {categoriesList.map((category:CategoryType) => {
        const LinkIcon = category.icon;
        return (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="bg-white px-4 py-2 rounded-md hover:bg-amber-200 text-black"
          >
          <p className="md:hidden text-2xl">{category.icon}</p>
          <p className="hidden md:block">{category.name}</p>

          </Link>
        );
      })}
    </>
  );
}*/