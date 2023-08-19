import Link from "next/link";

export default function AboutMe() {
  return (
    <section>
      <h1> O sobie </h1>
      <article>
        <h2> Na wstępie </h2>
        <div>
          <p> Yo! </p>
          <p>Na imię mam Szymon, jednak w internecie używam nicku {"Herob"}.</p>
          <p>Obecnie mam 23 lata i mieszkam oraz pracuję w Poznaniu.</p>
        </div>
      </article>
      <article>
        <h2> Zainteresowania</h2>
        <ul>
          <li> Fotografowanie zwierząt </li>
          <li> Poznawanie okolic </li>
          <li> Programowanie </li>
          <li> Neovim </li>
        </ul>
      </article>
      <article>
        <h2> Stack technologiczny </h2>
        <ul>
          <li> ReactJS </li>
          <li> jekyll </li>
          <li> vite </li>
          <li> webpack </li>
          <li> esbuild </li>
          <li> vueJS </li>
          <li> NextJS </li>
          <li> Gitlab CI </li>
          <li> Python (do backendu) </li>
          <li> Kotlin (do apek androidowych) </li>
        </ul>
      </article>
      <article>
        <h2> Wybrane stosowane programy </h2>
        <ul>
          <li>
            <Link href="https://github.com/Herob527/nvim">neovim</Link>
          </li>
          <li>Android Studio</li>
          <li>Ubuntu (rozważam migrację na NixOS)</li>
          <li>Ranger jako file manager</li>
          <li>Lazygit</li>
        </ul>
      </article>
      <article>
        <h2> Praca </h2>
        <div>
          <p>
            Od listopada 2022 pracuję w poznańskim oddziale
            <Link href="https://bitapps.fi/"> BitApps </Link> w zespole frontend
            developerów
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
      </article>
    </section>
  );
}
