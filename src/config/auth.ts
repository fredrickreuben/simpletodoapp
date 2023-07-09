import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const extractUsernameFromEmail = (email: string) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        const username = email.slice(0, atIndex);
        return username;
    }
    return email;
}


const config: NextAuthOptions = {
    pages: {
        signIn: '/'
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Email', type: 'text' },
            },
            async authorize(credentials) {
                if (credentials?.email) {
                    const user = { id: "1", name: extractUsernameFromEmail(credentials?.email ?? ''), email: credentials?.email }
                    return user
                } else {
                    throw new Error(JSON.stringify({ errors: 'Invalid Credentials', status: false }))
                }
            },
        }),
    ]
}

export default config