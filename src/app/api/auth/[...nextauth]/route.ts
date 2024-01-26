import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const NextAuthHandler = NextAuth(authOptions);
export { NextAuthHandler as GET, NextAuthHandler as POST };
