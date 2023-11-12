import Link from "next/link";
import { navigationEntry } from "../layout";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import luna from "@/public/luna-low-res.jpg";
import Image from "next/image";

type Props = {
  navigationEntries: readonly navigationEntry[];
};
export const MobileNavigation = ({ navigationEntries }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <div className="flex fixed top-0 right-0 z-50 flex-row flex-1 justify-between items-center p-4 w-full text-right shadow-lg md:hidden bg-mustard">
        <Link href="/" className="flex-1" onClick={() => setIsHidden(true)}>
          <Image
            src={luna}
            alt="logo"
            height={64}
            width={64}
            className="rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </Link>
        <button onClick={() => setIsHidden(!isHidden)} className="">
          <FontAwesomeIcon
            icon={isHidden ? faBars : faXmark}
            className="text-3xl"
          />
        </button>
      </div>
      <div
        className="flex mt-24 fixed top-0 left-0 flex-col gap-4 data-[hidden='true']:-translate-x-full data-[hidden='false']:translate-x-0 transition-transform w-full h-full bg-mustard-transparent backdrop-blur p-4"
        data-hidden={`${isHidden}`}
      >
        {navigationEntries.map((entry) => (
          <Link
            href={entry.href}
            key={entry.key}
            className="flex gap-2 justify-between items-center text-xl"
            onClick={() => setIsHidden(true)}
          >
            <span>{entry.text}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        ))}
      </div>
    </div>
  );
};
