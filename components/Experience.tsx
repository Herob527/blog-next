import { ArticleCard } from "@/app/components/ArticleCard";
import { TimeLine } from "./Timeline";
import { GetAllExperiencesQueryType } from "@/queries/experienceEntries";
import { useState } from "react";
import { urlFor } from "./sanityClient";
import Image from "next/image";

type Props = {
  experiences: GetAllExperiencesQueryType[];
};

export const ExperienceSection = ({ experiences }: Props) => {
  const [currentEntry, setCurrentEntry] =
    useState<GetAllExperiencesQueryType | null>(null);
  const url = currentEntry ? urlFor(currentEntry.icon).height(32).url() : "";
  console.log(url);
  return (
    <ArticleCard title="Praca">
      <TimeLine
        data={experiences}
        onFocus={(data) => setCurrentEntry(data)}
        onLostFocus={() => setCurrentEntry(null)}
        labelFunc={(data) => data.companyName}
        keyFunc={(data) => `${data.companyName} - ${data.jobTitle}`}
      />
      <div>
        <p className="flex flex-row gap-4 items-center font-bold uppercase">
          {currentEntry?.companyName ? (
            <>
              <a
                href={currentEntry.companyWebsite}
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                {currentEntry?.companyName}
              </a>
              <Image height={32} width={32} src={url} alt="logo" />
            </>
          ) : (
            "Wybierz wpis"
          )}
        </p>
        <div
          className={`${
            currentEntry
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          } transition-[grid-template-rows,opacity]`}
        >
          {currentEntry ? (
            <>
              <p>
                {currentEntry?.started} -{" "}
                {currentEntry?.finished || <i>Po dziś dzień</i>}
              </p>
              <p>Stanowisko: {currentEntry.jobTitle}</p>
              <p className="font-bold"> Osiągnięcia</p>
              <ul className="pl-4 list-disc">
                {currentEntry?.thingsDone.map((entry) => (
                  <li key={entry.thing}>{entry.thing}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </ArticleCard>
  );
};
