
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import {getUserByEmail} from "./data/user";
export const { handlers, signIn, signOut, auth } = NextAuth({
  session:{
    strategy:'jwt'
  },
  providers: [Google,GitHub,
    CredentialsProvider({
      async authorize(credentials) {
        if(credentials===null) return null
         try{
            const user = getUserByEmail(credentials?.email);
            if(user){
              const isMatch=user?.password === credentials?.password;
              if(isMatch) {
                return user;
              } else {
                throw new Error ("user not found");
              }
            }
            else{
              throw new Error ("User not found");
            }
         }catch(error){
          throw new Error(error);
         }
      }
    }),
  ],
})