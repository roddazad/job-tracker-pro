
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Rodd Azad',
          email: 'rodd@example.com',
        };

        if (
          credentials.email === 'rodd@example.com' &&
          credentials.password === 'password123'
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };