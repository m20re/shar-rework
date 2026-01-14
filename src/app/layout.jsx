import './globals.css';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
