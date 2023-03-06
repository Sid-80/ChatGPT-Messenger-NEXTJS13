import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        // ! - It indicates that it will be there in env file
      clientId: process.env.GOOGLEID!,
      clientSecret: process.env.GOOGLESECRET!,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)