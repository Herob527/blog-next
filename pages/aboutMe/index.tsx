import Link from "next/link";
import { ArticleCard } from "@/app/components/ArticleCard";
import { faCamera, faCode, faHiking } from "@fortawesome/free-solid-svg-icons";
import {
  ListEntryFa,
  ListEntryImage,
} from "@/app/components/ArticleCard/ListEntry";
import type { InferGetServerSidePropsType } from "next";
import { client, urlFor } from "@/components/sanityClient";
import {
  GET_ALL_STACK_QUERY,
  GetAllStackQueryType,
} from "@/queries/stackEntries";
import {
  GET_PROGRAMS_QUERY,
  GetProgramsQueryType,
} from "@/queries/programEntries";
import {
  GET_ALL_EXPERIENCES_QUERY,
  GetAllExperiencesQueryType,
} from "@/queries/experienceEntries";
import { ExperienceSection } from "@/components/Experience";

export const getServerSideProps = async () => {
  const stack: GetAllStackQueryType[] = await client.fetch(GET_ALL_STACK_QUERY);
  const usedTech: GetProgramsQueryType[] =
    await client.fetch(GET_PROGRAMS_QUERY);
  const experiences: GetAllExperiencesQueryType[] = await client.fetch(
    GET_ALL_EXPERIENCES_QUERY,
  );
  console.log("[getServerSideProps - experiences]", experiences);

  return {
    props: {
      stack,
      usedTech,
      experiences,
    },
  };
};

export default function Page({
  stack,
  usedTech,
  experiences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section className="my-4">
      <h1 className="mb-4 text-4xl font-bold text-center"> O sobie </h1>
      <div className="flex flex-col flex-wrap gap-6">
        <ArticleCard title="Na wstępie">
          <div className="flex flex-col justify-center items-center">
            <p> Yo! </p>
            <p>
              Na imię mam Szymon, jednak w internecie używam nicku
              &quot;Herob&quot;.
            </p>
            <p>Obecnie mam 23 lata i mieszkam oraz pracuję w Poznaniu.</p>
          </div>
        </ArticleCard>
        <ArticleCard title="Zainteresowania">
          <ul className="flex flex-row flex-wrap gap-4 justify-center items-center">
            <ListEntryFa icon={faCamera} title="Fotografowanie zwierząt" />
            <ListEntryFa icon={faHiking} title="Poznawanie okolic" />
            <ListEntryFa icon={faCode} title="Programowanie" />
          </ul>
        </ArticleCard>
        <ArticleCard title="Stack">
          <ul className="flex relative flex-row flex-wrap gap-8 justify-center items-center mx-auto max-w-sm h-full">
            {stack.map((entry) => (
              <ListEntryImage
                key={entry.icon.asset._ref}
                title={entry.title}
                file={urlFor(entry.icon.asset._ref)
                  .format("png")
                  .height(64)
                  .url()}
                alt={entry.icon.type}
              />
            ))}
          </ul>
        </ArticleCard>
        <ArticleCard title="Programy">
          <ul className="flex relative flex-row flex-wrap gap-8 justify-center items-center mx-auto max-w-sm h-full">
            {usedTech.map((entry) => (
              <ListEntryImage
                key={entry.name}
                title={
                  <Link
                    href={entry.link}
                    className="text-blue-500 whitespace-nowrap visited:text-purple-700"
                  >
                    {entry.name}
                  </Link>
                }
                file={urlFor(entry.icon.asset._ref)
                  .format("png")
                  .height(64)
                  .url()}
                alt={entry.iconAlt}
              />
            ))}
          </ul>
        </ArticleCard>
        <ExperienceSection experiences={experiences} />
        <ArticleCard title="Poza pracą">
          <div>
            <p>
              Poza pracą chodzę na tajski boks, czasem popływam na Termach
              Maltańskich czy na okolicznej pływalni
            </p>
            <p>
              Jednak też prowadzę tego bloga i cały czas się uczę czegoś (kto
              stoi w miejscu ten się cofa)
            </p>
            <p>
              Poza tym jestem też administratorem serwera{" "}
              <Link href="https://discord.gg/hA92UMVzmM">
                {" "}
                Discord &quot;Społeczność Mekatrona&quot;,
              </Link>{" "}
              która skupia się wokół artystycznego wykorzystania AI
            </p>
          </div>
        </ArticleCard>
      </div>
    </section>
  );
}
