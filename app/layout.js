import "./globals.css";
export const metadata = {
  title: "Contact-Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='winter'>
      <body>{children}</body>
    </html>
  );
}
