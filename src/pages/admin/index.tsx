import Head from "next/head";

export default function Admin() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Content Manager</title>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <style
        dangerouslySetInnerHTML={{
          __html: `body {background: rgb(239, 240, 244);}`,
        }}
      ></style>
      <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
    </Head>
  );
}
