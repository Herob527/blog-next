import Link from "next/link";
import { ArticleCard } from "../components/ArticleCard";
import { faCamera, faCode, faHiking } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "@/public/react-logo.svg";
import jekyllLogo from "@/public/jekyll-logo.svg";
import viteLogo from "@/public/vite-logo.svg";
import {
  ListEntryFa,
  ListEntryImage,
} from "../components/ArticleCard/ListEntry";

export default function AboutMe() {
  return (
    <section className="my-4">
      <h1 className="mb-4 text-4xl font-bold text-center"> O sobie </h1>
      <div className="flex flex-row flex-wrap gap-6">
        <ArticleCard title="Na wstępie">
          <div>
            <p> Yo! </p>
            <p>
              Na imię mam Szymon, jednak w internecie używam nicku
              &quot;Herob&quot;.
            </p>
            <p>Obecnie mam 23 lata i mieszkam oraz pracuję w Poznaniu.</p>
          </div>
        </ArticleCard>
        <ArticleCard title="Zainteresowania">
          <ul className="flex flex-col flex-wrap gap-4 justify-center items-center">
            <ListEntryFa icon={faCamera} title="Fotografowanie zwierząt" />
            <ListEntryFa icon={faHiking} title="Poznawanie okolic" />
            <ListEntryFa icon={faCode} title="Programowanie" />
          </ul>
        </ArticleCard>
        <ArticleCard title="Stack">
          <ul className="flex flex-col flex-wrap gap-4 justify-center items-center">
            <ListEntryImage file={reactLogo} alt="React logo" title="ReactJS" />
            <ListEntryImage file={viteLogo} alt="Vite logo" title="ViteJS" />
            <ListEntryImage
              file={jekyllLogo}
              alt="Jekyll logo"
              title="Jekyll"
            />

            <li> Webpack </li>
            <li> VueJS </li>
            <li> NextJS </li>
            <li> Gitlab CI </li>
            <li> Python </li>
            <li> Kotlin </li>
          </ul>
        </ArticleCard>
        <ArticleCard title="Programy">
          <ul>
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
