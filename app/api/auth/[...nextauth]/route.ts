import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// En un proyecto real, importarías tu cliente de base de datos aquí
// import { db } from '@/lib/db'
// import { comparePasswords } from '@/lib/auth'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // En un proyecto real, verificarías contra tu base de datos
        // const user = await db.user.findUnique({ where: { email: credentials.email } })
        // if (!user || !await comparePasswords(credentials.password, user.password)) {
        //   return null
        // }

        // Simulación de verificación (¡reemplazar en producción!)
        if (credentials.email === "test@example.com" && credentials.password === "password123") {
          return {
            id: "1",
            name: "Usuario de Prueba",
            email: credentials.email,
            image: "/placeholder.svg?height=100&width=100",
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // Error code passed in query string as ?error=
    newUser: "/register", // New users will be directed here on first sign in
  },
  callbacks: {
    async session({ session, token }) {
      // Enviar propiedades adicionales a la sesión del cliente
      if (session.user) {
        session.user.id = token.sub
        // Aquí podrías agregar roles u otros datos del usuario
        // session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user }) {
      // Persistir datos adicionales en el token
      if (user) {
        token.id = user.id
        // token.role = user.role
      }
      return token
    },
  },
  session: {
    strategy: 'jwt' as 'jwt', // Explicitly set the type to 'jwt'
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  secret: process.env.NEXTAUTH_SECRET || "tu-secreto-seguro-para-nextauth",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
