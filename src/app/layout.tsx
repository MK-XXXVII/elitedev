import "./globals.css";
import '@fontsource-variable/urbanist';
import { PrismicPreview } from "@prismicio/next";
import Header from "@/components/Header";
import { repositoryName } from "@/prismicio";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-sans">
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}