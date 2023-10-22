import { ArticleCard } from "@/app/components/ArticleCard";
import { TimeLine } from "./Timeline";
import { GetAllExperiencesQueryType } from "@/queries/experienceEntries";
import { useState } from "react";

type Props = {
  experiences: GetAllExperiencesQueryType[];
};

export const ExperienceSection = ({ experiences }: Props) => {
  const [currentEntry, setCurrentEntry] =
    useState<GetAllExperiencesQueryType | null>(null);
  return (
    <ArticleCard title="Praca">
      <TimeLine
        data={experiences}
        onClick={(data) => setCurrentEntry(data)}
        labelFunc={(data) => data.companyName}
        keyFunc={(data) => `${data.companyName} - ${data.jobTitle}`}
      />
      <div>
        <p> {currentEntry?.companyName || "Select entry"} </p>
      </div>
    </ArticleCard>
  );
};
