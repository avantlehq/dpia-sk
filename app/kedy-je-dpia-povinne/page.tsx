import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Kedy je DPIA povinná? – Kritériá podľa GDPR",
  description:
    "Zistite, kedy musíte vypracovať DPIA. Automatické prípady podľa čl. 35 ods. 3 GDPR, 9 kritérií EDPB a zoznam WP29 pre Slovensko.",
  keywords: [
    "kedy je DPIA povinná",
    "DPIA povinnosť GDPR",
    "článok 35 GDPR",
    "EDPB kritériá DPIA",
    "WP29 DPIA",
    "blacklist DPIA Slovensko",
  ],
  alternates: { canonical: "https://dpia.sk/kedy-je-dpia-povinne" },
};

export default function KedyJeDpiaPovinne() {
  return (
    <>
      <ArticleLayout
        title="Kedy je DPIA povinná?"
        description="GDPR vymedzuje konkrétne situácie, kedy musí prevádzkovateľ vypracovať DPIA pred začatím spracúvania osobných údajov."
        badge="Povinnosť"
      >
        <h2>Základné pravidlo – vysoké riziko</h2>
        <p>
          Podľa článku 35 ods. 1 GDPR je DPIA povinná vždy, keď spracúvanie{" "}
          <strong>
            pravdepodobne povedie k vysokému riziku pre práva a slobody
            fyzických osôb
          </strong>
          . Toto platí najmä pri použití nových technológií a pri spracúvaní,
          ktoré je svojou povahou, rozsahom, kontextom alebo účelom rizikové.
        </p>
        <p>
          Pojem „vysoké riziko" nie je v GDPR presne definovaný. Pri jeho
          posudzovaní sú kľúčové usmernenia Pracovnej skupiny WP29 (teraz EDPB)
          a zoznamy vydané dozornými orgánmi jednotlivých členských štátov.
        </p>

        <h2>Automatické prípady – čl. 35 ods. 3 GDPR</h2>
        <p>
          GDPR v článku 35 ods. 3 výslovne vymenúva tri typy spracúvania, pri
          ktorých je DPIA vždy povinná:
        </p>
        <ul>
          <li>
            <strong>Systematické a rozsiahle hodnotenie osobných aspektov</strong>{" "}
            fyzických osôb vrátane profilovania, na základe ktorého sa
            prijímajú rozhodnutia s právnym alebo podobne závažným účinkom na
            fyzické osoby (napr. automatizované rozhodovanie o úveroch,
            poistení, zamestnanosti)
          </li>
          <li>
            <strong>
              Rozsiahle spracúvanie osobitných kategórií údajov
            </strong>{" "}
            (citlivé údaje podľa čl. 9 GDPR – zdravotné údaje, biometrické,
            rasový pôvod, náboženstvo, politické názory a ďalšie) alebo údajov
            o odsúdení za trestné činy
          </li>
          <li>
            <strong>
              Systematické monitorovanie verejne prístupných miest vo veľkom
              rozsahu
            </strong>{" "}
            (napr. rozsiahle kamerové systémy, sledovanie pohybu osôb)
          </li>
        </ul>

        <h2>Deväť kritérií EDPB (WP29)</h2>
        <p>
          Európsky výbor pre ochranu údajov (EDPB) v usmernení WP248 (rev. 01)
          definoval <strong>deväť kritérií</strong>, ktorých prítomnosť
          naznačuje vysoké riziko. Ak spracúvanie spĺňa aspoň{" "}
          <strong>dve z týchto kritérií</strong>, spravidla to znamená, že DPIA
          je povinná:
        </p>
        <ol>
          <li>
            <strong>Hodnotenie alebo skórovanie</strong> – vrátane profilovania
            a prediktívnej analýzy (napr. hodnotenie bonity, zdravotného
            stavu, pracovného výkonu)
          </li>
          <li>
            <strong>Automatizované rozhodovanie s právnym alebo závažným účinkom</strong>{" "}
            – rozhodnutia bez ľudského zásahu, ktoré majú vplyv na práva
            dotknutej osoby
          </li>
          <li>
            <strong>Systematické monitorovanie</strong> – sledovanie alebo
            kontrola dotknutých osôb vrátane zberu údajov prostredníctvom
            sietí (napr. monitorovanie zamestnancov, sledovanie pohybu)
          </li>
          <li>
            <strong>Citlivé alebo vysoko osobné údaje</strong> – osobitné
            kategórie podľa čl. 9 GDPR, údaje o trestných činoch, finančné
            údaje, lokalizačné údaje alebo iné údaje, ktoré môžu viesť k
            diskriminácii alebo ujme
          </li>
          <li>
            <strong>Rozsiahle spracúvanie</strong> – veľký počet dotknutých
            osôb, veľký objem údajov, dlhodobé spracúvanie alebo veľký
            geografický rozsah
          </li>
          <li>
            <strong>Krížové porovnávanie alebo kombinovanie súborov údajov</strong>{" "}
            – spojenie údajov z rôznych zdrojov spôsobom, ktorý presahuje
            pôvodné očakávania dotknutých osôb
          </li>
          <li>
            <strong>Zraniteľné dotknuté osoby</strong> – spracúvanie sa týka
            detí, zamestnancov, pacientov, žiadateľov o azyl, osôb vo
            finančnej núdzi alebo iných skupín so zníženou schopnosťou
            slobodne súhlasiť
          </li>
          <li>
            <strong>Inovatívne alebo nové technologické riešenia</strong> –
            použitie technológií alebo organizačných riešení, ktoré ešte neboli
            dostatočne overené z hľadiska ochrany osobných údajov (napr. AI,
            IoT, rozoznávanie tváre)
          </li>
          <li>
            <strong>
              Spracúvanie, ktoré bráni dotknutým osobám uplatniť práva alebo
              využívať služby
            </strong>{" "}
            – situácie, keď odmietnutie vedie k vylúčeniu z prístupu k
            zmluvám, službám alebo iným prínosom
          </li>
        </ol>

        <h2>Zoznamy dozorných orgánov (blacklist a whitelist)</h2>
        <p>
          Článok 35 ods. 4 GDPR ukladá dozorným orgánom povinnosť zostaviť a
          zverejniť zoznam druhov spracúvateľských operácií, pri ktorých je
          DPIA povinná (<strong>blacklist</strong>). Niektoré dozorné orgány
          vydali aj zoznam operácií, pri ktorých DPIA povinná nie je (
          <strong>whitelist</strong>).
        </p>
        <p>
          Na Slovensku vydal{" "}
          <strong>Úrad na ochranu osobných údajov SR (UOOU SR)</strong> zoznam
          druhov spracovateľských operácií, pri ktorých sa vyžaduje posúdenie
          vplyvu. Tento zoznam zahŕňa okrem iného:
        </p>
        <ul>
          <li>
            Rozsiahle spracúvanie biometrických údajov na jednoznačnú
            identifikáciu fyzických osôb
          </li>
          <li>
            Spracúvanie zdravotných údajov na účely profilovania alebo
            prediktívnej analýzy
          </li>
          <li>
            Systematické monitorovanie zamestnancov vrátane sledovania
            počítačovej aktivity
          </li>
          <li>
            Spracúvanie osobných údajov detí na marketingové alebo profilingové
            účely
          </li>
          <li>
            Rozsiahle spracúvanie lokalizačných údajov fyzických osôb
          </li>
          <li>
            Využívanie algoritmov alebo AI na automatizované rozhodovanie s
            právnym účinkom
          </li>
        </ul>
        <p>
          Pre aktuálny a úplný zoznam odporúčame priamo navštíviť webovú
          stránku UOOU SR na adrese dataprotection.gov.sk.
        </p>

        <h2>Kedy DPIA povinná nie je?</h2>
        <p>
          DPIA nie je povinná v každej situácii. Spracúvanie nevyžaduje DPIA,
          ak:
        </p>
        <ul>
          <li>
            Nie je pravdepodobné, že by viedlo k vysokému riziku pre dotknuté
            osoby (napr. jednoduché spracúvanie kontaktných údajov na
            fakturačné účely)
          </li>
          <li>
            Povaha, rozsah, kontext a účely spracúvania sú veľmi podobné
            spracúvaniu, pre ktoré bola DPIA už vykonaná – v tom prípade je
            možné použiť výsledky existujúcej DPIA
          </li>
          <li>
            Spracúvanie figuruje na whiteliste vydanom príslušným dozorným
            orgánom
          </li>
          <li>
            Spracúvanie bolo povolené právom EÚ alebo členského štátu, pričom
            toto právo vyžaduje vykonanie všeobecného posúdenia vplyvu v
            kontexte prijatia daného právneho aktu
          </li>
        </ul>

        <h2>Čo ak si nie som istý, či DPIA potrebujem?</h2>
        <p>
          Ak existujú pochybnosti, či dané spracúvanie vyžaduje DPIA, GDPR
          odporúča DPIA vypracovať. Náklady na vykonanie DPIA sú spravidla
          nižšie ako riziko sankcie za jej nevypracovanie v prípade, keď bola
          povinná. Prevádzkovateľ by mal zdokumentovať aj rozhodnutie, že DPIA
          nie je potrebná, a uviesť dôvody tohto záveru – toto je súčasťou
          princípu zodpovednosti (accountability).
        </p>

        <h2>Praktické príklady</h2>
        <p>
          Niektoré typické situácie, pri ktorých DPIA povinná je:
        </p>
        <ul>
          <li>Zavedenie systému rozoznávania tváre na vstupe do budovy</li>
          <li>
            Spustenie HR platformy so sledovaním produktivity zamestnancov
          </li>
          <li>
            Nasadenie AI nástroja na automatizované hodnotenie životopisov
            uchádzačov o prácu
          </li>
          <li>
            Spracúvanie zdravotných záznamov pacientov v cloudovom systéme
          </li>
          <li>
            Prevádzka rozsiahleho kamerového systému v nákupnom centre
          </li>
          <li>
            Profilovanie zákazníkov na účely cielenej reklamy v e-commerce
          </li>
        </ul>
        <p>
          Viac reálnych príkladov nájdete na stránke{" "}
          <a href="/priklady" className="text-blue-700 hover:underline">
            Príklady použitia DPIA
          </a>
          .
        </p>
      </ArticleLayout>
      <CTA
        title="Neviete, či vaše spracúvanie vyžaduje DPIA?"
        description="Náš online nástroj vám pomôže rýchlo vyhodnotiť povinnosť a vypracovať DPIA krok za krokom."
        primaryLabel="Prihlásiť sa do beta"
        primaryHref="/sablona-dpia"
        secondaryLabel="Ako vypracovať DPIA?"
        secondaryHref="/ako-vypracovat-dpia"
      />
    </>
  );
}
