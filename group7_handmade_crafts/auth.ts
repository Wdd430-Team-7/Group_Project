import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { Account } from '@/app/lib/definitions';
//import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<Account | undefined> {
  try {
    const user = await sql<Account>`SELECT * FROM handcrafted.account WHERE account_email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          console.log(user)
          if (!user) return null;

          if (password === user.account_password && user.account_authenticated) return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});