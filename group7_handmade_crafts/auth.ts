
import { getSession } from 'next-auth/react';
import { Session } from 'inspector';
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT account_id AS id, account_email AS email, account_password AS password FROM handcrafted.account WHERE account_email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
export const { auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string() })
                    .safeParse(credentials);
                
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    

                    if (password == user.password) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});