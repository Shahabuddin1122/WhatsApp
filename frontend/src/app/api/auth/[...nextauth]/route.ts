import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                number: {label: "number", type: "number", placeholder: "Enter Your number"},
            },
            async authorize(credentials:any, req:any) {
                const res = await fetch("http://localhost:8080/api/v1/user/save", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                })
                const user = await res.json();
                console.log(user);
                if (res.ok && user)
                    return user
                else
                    return null;
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token;
            // session.user.user.role = user;
            return session;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 120000 //in seconds
    },
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/login', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
    }
})

export { handler as GET, handler as POST }