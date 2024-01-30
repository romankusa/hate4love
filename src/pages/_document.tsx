import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            sizes="any"
            href="/images/favicon.ico"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700;800&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
