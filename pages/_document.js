import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="A site for my programming porfolio"/> 
          <meta charSet="utf-8"/>
          <meta name="robots" content="noindex, nofollow"/>
          <meta name="viewport" content="width=device-width"/>
        {/* <link rel="stylesheet" href="https://cdnjs.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Baloo Bhaina 2', cursive;
          }
        `}</style>
      </html>
    )
  }
}
