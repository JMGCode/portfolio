import "../styles/globals.scss";

import Head from "next/head";
import Header from "../layout/Header/Header";
import React from "react";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>JmgCode portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="JmgCode portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <div className={styles.container}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
