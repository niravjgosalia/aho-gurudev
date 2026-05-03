import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/srmd-flame.png" />
        <link rel="shortcut icon" type="image/png" href="/srmd-flame.png" />
        <link rel="apple-touch-icon" href="/srmd-flame.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
