import { AppProps } from 'next/app'
import Head from 'next/head'
import { theme } from '../styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://pegasuslogistics.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'oyiwBWsVQRjDF2DATK9Y676vb5c9U0mB6l8SDOPUcHlqFGiNiVnQ8JlBLIeJKv8p'
  },
  cache: new InMemoryCache()
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>React Avançado - Boilerplate</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#06092B" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
