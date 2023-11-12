import Link from "next/link";
import { navigationEntry } from "../layout";
import luna from "@/public/luna-low-res.jpg";
import Image from "next/image";

type Props = {
  navigationEntries: readonly navigationEntry[];
};

export const DesktopNavigation = ({ navigationEntries }: Props) => (
  <div className="hidden z-50 flex-row flex-1 gap-16 justify-end items-center p-4 h-full md:flex lg:px-28 bg-mustard">
    <div className="hidden flex-row flex-1 gap-16 justify-end items-center md:flex">
      <Link href="/" className="flex-1">
        <Image
          src={luna}
          alt="logo"
          height={64}
          width={64}
          className="rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
        />
      </Link>
      {navigationEntries.map((entry) => (
        <Link href={entry.href} key={entry.key}>
          {entry.text}
        </Link>
      ))}
    </div>
  </div>
);
