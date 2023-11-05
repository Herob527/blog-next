import "./globals.css";
import Link from "next/link";
import luna from "@/public/luna-low-res.jpg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-24">
        <nav className="flex fixed top-0 z-50 flex-row flex-wrap gap-4 py-4 px-4 w-screen shadow-lg lg:px-28 bg-mustard">
          <div>
            <Link href="/" className="flex-1">
              <Image
                src={luna}
                alt="logo"
                height={64}
                width={64}
                className="rounded-full transition-transform duration-700 ease-in-out hover:scale-125"
              />
            </Link>
          </div>
          <div className="flex flex-row flex-1 gap-16 justify-end items-center">
            <Link href="/aboutMe" className="text-md">
              O mnie
            </Link>
            <Link href="/posts"> Posty </Link>
            <Link href="/contact"> Kontakt </Link>
          </div>
        </nav>
        <main className="container px-4 mx-auto">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
