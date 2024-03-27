import { Metadata } from 'next';
import { patrick_hand, lato } from "@/app/ui/fonts";
import './ArtistsPage.css';
import { fetchProducts, fetchArtists } from '../lib/data';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Artists',
};

export default async function Page() {
  const artists = await fetchArtists();
  const products =await fetchProducts();
  return (
    <div>
      <div className="artists-container">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card px-6">
            <Image
              src={artist.artist_image}
              width={300}
              height={300}
              alt={artist.name}
            />
            <h2 className="my-4 font-semibold">{artist.name}</h2>
            <p>{artist.artist_bio}</p>
            <div className="products-container">
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};