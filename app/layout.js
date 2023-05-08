"use client";

import StyledComponentsRegistry from "./lib/registry";
import Header from "./header/page";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
