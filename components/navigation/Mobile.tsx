import Link from "next/link";
import { navigationEntry } from "../layout";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  navigationEntries: readonly navigationEntry[];
};
export const MobileNavigation = ({ navigationEntries }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <button
        className="flex flex-1 justify-end self-center text-right md:hidden"
        onClick={() => setIsHidden(!isHidden)}
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl" />
      </button>

      <div className="block md:hidden">
        <div
          className="flex fixed top-0 left-0 flex-col gap-4 data-[hidden='true']:-translate-x-full data-[hidden='false']:translate-x-0"
          data-hidden={`${isHidden}`}
        >
          {navigationEntries.map((entry) => (
            <Link href={entry.href} key={entry.key}>
              {entry.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
