'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8000/graphql', // Use environment variable with fallback
  cache: new InMemoryCache(),
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
