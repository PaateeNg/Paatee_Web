import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/database/models/User";
import { connectToDB } from "@/database/connectToDB";
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                userType: { label: "User Type", type: "text" }
            },
            async authorize(credentials: any) {
                await connectToDB();
                try {
                    const user = await User.findOne({
                        email: credentials.email,
                        userType: credentials.userType
                    });
                    
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return {
                                id: user.id,
                                email: user.email,
                                name: user.name,
                                userType: user.userType,
                                businessName: user.businessName
                            };
                        }
                    }
                    return null; // Returns null if user not found or password incorrect
                } catch (error) {
                    throw new Error("Authentication failed. Please try again.");
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, // 1 day session
    },
    jwt: {
        maxAge: 24 * 60 * 60, // 1 day expiry
    },
    pages: {
        signIn: '/sign-in', // Redirect to login page if not authenticated
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.userType = user.userType;
                token.businessName = user.businessName;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.userType = token.userType as any;
                session.user.businessName = token.businessName as any;
            }
            return session;
        }
    }
};
