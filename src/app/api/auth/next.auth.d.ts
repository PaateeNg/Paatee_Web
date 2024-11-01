// next-auth.d.ts
//this is for session object
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      userType?: string | null;
      businessName?: string | null;  
    };
  }
  interface User {
    id: string;
    userType: string;
    businessName: string
  }
}
