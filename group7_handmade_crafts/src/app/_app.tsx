// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../app/contexts/AuthContext';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/app/products">
            <a>Products</a>
          </Link>
          <Link href="/app/artists">
            <a>Artists</a>
          </Link>
          <Link href="/app/sellers/login">
            <a>Login</a>
          </Link>
        </nav>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
