import "./globals.css";
import { DesktopNavigation } from "./navigation/Desktop";
import { MobileNavigation } from "./navigation/Mobile";

export type navigationEntry = {
  href: string;
  key: string;
  text: string;
};

const navigationEntries = [
  {
    href: "/aboutMe",
    key: "aboutMe",
    text: "O mnie",
  },
  {
    href: "/posts",
    key: "posts",
    text: "Posty",
  },
  {
    href: "/contact",
    key: "contact",
    text: "Kontakt",
  },
] as const satisfies readonly navigationEntry[];

// type navigationKeys = (typeof navigationEntries)[number]["key"];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-mustard-500">
      <body className="pt-24 min-h-screen bg-mustard-500">
        <nav className="flex fixed top-0 z-50 flex-row flex-wrap gap-4 w-screen h-screen shadow-lg md:h-auto">
          <DesktopNavigation navigationEntries={navigationEntries} />
          <MobileNavigation navigationEntries={navigationEntries} />
        </nav>
        <main className="container px-4 mx-auto">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
