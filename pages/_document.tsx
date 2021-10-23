import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class NextDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="Movie searcher app" name="description" />
          <meta content="#303030" name="theme-color" />
          <meta content="#303030" name="msapplication-TileColor" />
          <link
            color="#303030"
            href="/icons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/manifest.json" rel="manifest" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
