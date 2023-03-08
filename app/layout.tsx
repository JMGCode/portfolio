"use client";

import "../styles/globals.scss";

import { inter, openSans } from "./fonts";

import Header from "../layout/Header/Header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <head>
        <title>JmgCode portfolio</title>
        <meta name="description" content="JmgCode portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <Header />
        <div>{children}</div>
        <div id="myportal">{}</div>
      </body>
    </html>
  );
}
