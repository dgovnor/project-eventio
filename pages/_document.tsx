import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class MyDocument extends Document {
    static async getInitialProps(ctx:any) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="en">
          <Head />
            <title>Eventio</title>

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
            name="description"
            content="App created by Jude Ezekiel"
            />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument