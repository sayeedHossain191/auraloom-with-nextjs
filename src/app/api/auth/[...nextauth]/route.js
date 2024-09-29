import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your email" },
                password: { label: "Password", type: "password", placeholder: "your password" }
            },

            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                return true;
            },
        }),
    ],

})

export { handler as GET, handler as POST }