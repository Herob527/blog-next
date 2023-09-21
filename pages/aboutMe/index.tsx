import Link from "next/link";
import { ArticleCard } from "@/app/components/ArticleCard";
import { faCamera, faCode, faHiking } from "@fortawesome/free-solid-svg-icons";
import {
  ListEntryFa,
  ListEntryImage,
} from "@/app/components/ArticleCard/ListEntry";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { client, urlFor } from "@/components/sanityClient";

type iconType = {
  asset: {
    _type: string;
    _ref: string;
  };
  type: string;
};

type Repo = {
  icon: iconType;
  title: string;
}[];

export const getStaticProps: GetStaticProps<{ repo: Repo }> = async () => {
  console.log("[getStaticProps - 'test']", "test");
  const data = await client.fetch('*[_type=="stackEntry"]');

  return {
    props: {
      repo: data,
    },
  };
};

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("[Page - repo]", repo);
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
            {repo.map((entry) => (
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
          <ul className="flex flex-col flex-wrap gap-4 justify-center items-center">
            <li>
              <Link
                href="https://github.com/Herob527/nvim"
                title="Link do konfiguracji"
                className="text-blue-500"
              >
                NeoVim
              </Link>
            </li>
            <li>Android Studio</li>
            <li>Ubuntu</li>
            <li>Ranger jako file manager</li>
            <li>LazyGit</li>
          </ul>
        </ArticleCard>
        <ArticleCard title="Praca">
          <div>
            <p>
              Od listopada 2022 pracuję w poznańskim oddziale
              <Link href="https://bitapps.fi/"> BitApps </Link> w zespole
              frontend developerów
            </p>
            <p>
              Poza zwykłym wykonywaniem tasków, zajmuję się też eksplorowaniem
              możliwości wprowadzenia techologii to projektów
            </p>
            <div>
              <h3> Sukcesy </h3>
              <ul>
                <li> Migracja jednego projektu z CRA na Vite </li>
                <li> Połączenie dwóch projektów w jeden </li>
                <li> Optymalizacja pipelineów </li>
                <li>
                  Rozwój strony firmy pod względem wyglądu, responsywności oraz
                  funkcjonalności
                </li>
              </ul>
            </div>
          </div>
        </ArticleCard>
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
