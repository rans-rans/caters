import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { prismadb } from './prisma';

export const authOptions = {
    adapter:PrismaAdapter(prismadb),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.SECRET,
    session:{
        strategy:"jwt"
    },

}