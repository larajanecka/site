import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lara Janecka",
  description: "Personal website of Lara Janecka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://www.nerdfonts.com/assets/css/webfont.css"
        />
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
