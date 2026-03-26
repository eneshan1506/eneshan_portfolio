import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ScrollToTop from "@/app/components/ScrollToTop";
import ThemeProvider from "@/app/components/ThemeProvider";
import ThemeScript from "@/app/components/ThemeScript";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
