import { forum, inter } from "./Cx/Font/font";
import "./globals.css";

export const metadata = {
  title: "Amae - Gift the Support She Actually Needs",
  description: "Gift meaningful support for new mothers with Amae",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${forum.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
