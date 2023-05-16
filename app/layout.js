import StyledComponentsRegistry from "./lib/registry";
import Header from "./header/page";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
