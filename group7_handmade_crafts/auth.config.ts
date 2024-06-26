import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
        async redirect({url, baseUrl}) {
            return '/dashboard'
        },
        async session({ session, token, user }) {
            return session
        },
        async jwt({ token, user, session }) {
          return token
        }
    },
    providers: [], // add providers with an empty array for now
} satisfies NextAuthConfig