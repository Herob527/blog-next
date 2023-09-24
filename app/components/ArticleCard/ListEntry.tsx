import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import Image from "next/image";

type props = {
  title: string;
  icon: FontAwesomeIconProps["icon"];
};

const ListEntryFa = ({ title, icon }: props) => {
  return (
    <li className="flex flex-col gap-2 items-center text-center">
      <FontAwesomeIcon icon={icon} width={32} height={32} />
      <span>{title}</span>
    </li>
  );
};

type propsImage = {
  title: string | JSX.Element;
  file: string;
  alt: string;
};

const ListEntryImage = ({ title, file, alt }: propsImage) => {
  return (
    <li className="inline-flex relative flex-col flex-1 items-center text-center">
      <div className="relative mb-2 w-12 h-12">
        <Image src={file} fill alt={alt} className="object-contain" priority />
      </div>
      <span>{title}</span>
    </li>
  );
};

export { ListEntryFa, ListEntryImage };
