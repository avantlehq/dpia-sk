import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Ako vypracovať DPIA – Krokový návod",
  description:
    "Praktický postup vypracovania DPIA krok za krokom: od popisu spracúvania cez identifikáciu rizík až po záverečnú dokumentáciu podľa GDPR.",
  keywords: [
    "ako vypracovať DPIA",
    "postup DPIA",
    "DPIA krok za krokom",
    "DPIA obsah",
    "DPIA metodika",
    "DPIA GDPR Slovensko",
  ],
  alternates: { canonical: "https://dpia.sk/ako-vypracovat-dpia" },
};

export default function AkoVypracovatDpia() {
  return (
    <>
      <ArticleLayout
        title="Ako vypracovať DPIA?"
        description="Praktický krokový postup vypracovania posúdenia vplyvu na ochranu osobných údajov podľa požiadaviek GDPR."
        badge="Postup"
      >
        <h2>Pred začatím: čo potrebujete vedieť</h2>
        <p>
          DPIA by mala byť vypracovaná <strong>pred začatím spracúvania</strong>{" "}
          – nie spätne. Ak spracúvanie už prebieha a DPIA nebola vykonaná,
          odporúča sa ju vypracovať čo najskôr. DPIA nie je jednorazový úkon;
          je to živý dokument, ktorý treba revidovať pri každej podstatnej
          zmene spracúvania.
        </p>
        <p>
          Za DPIA zodpovedá <strong>prevádzkovateľ</strong>. Ak máte DPO,
          zapojte ho od začiatku – jeho úlohou je radiť a kontrolovať. Môžete
          tiež konzultovať so sprostredkovateľmi, technickým tímom alebo
          externými expertmi.
        </p>

        <h2>Krok 1: Popis spracúvania</h2>
        <p>
          Prvým krokom je podrobný popis toho, čo sa bude s osobnými údajmi
          diať. Tento popis musí byť dostatočne konkrétny, aby umožnil
          posúdenie rizík. Zahrňte:
        </p>
        <ul>
          <li>
            <strong>Účel spracúvania</strong> – prečo spracúvate osobné údaje,
            aký je konkrétny cieľ
          </li>
          <li>
            <strong>Právny základ</strong> – na akom právnom základe spracúvanie
            prebieha (súhlas, zmluva, právna povinnosť, oprávnený záujem,
            životný záujem, verejná úloha)
          </li>
          <li>
            <strong>Kategórie údajov</strong> – aké typy osobných údajov sú
            spracúvané (meno, adresa, zdravotné údaje, biometrické údaje a pod.)
          </li>
          <li>
            <strong>Dotknuté osoby</strong> – kto sú osoby, ktorých údaje sú
            spracúvané (zákazníci, zamestnanci, pacienti, deti a pod.)
          </li>
          <li>
            <strong>Príjemcovia údajov</strong> – kto má prístup k údajom,
            komu sú údaje poskytované, vrátane tretích krajín
          </li>
          <li>
            <strong>Doba uchovávania</strong> – ako dlho sú údaje uchovávané
            a aký je postup ich vymazania
          </li>
          <li>
            <strong>Technické prostriedky</strong> – systémy, nástroje a
            technológie použité pri spracúvaní
          </li>
        </ul>

        <h2>Krok 2: Posúdenie nevyhnutnosti a primeranosti</h2>
        <p>
          V tomto kroku overujete, či je spracúvanie skutočne nevyhnutné na
          dosiahnutie účelu a či je primerané tomuto účelu. Kľúčové otázky:
        </p>
        <ul>
          <li>
            Je zvolený právny základ vhodný a platný pre daný účel?
          </li>
          <li>
            Spracúvate len také údaje, ktoré sú skutočne potrebné (zásada
            minimalizácie údajov)?
          </li>
          <li>
            Je doba uchovávania čo najkratšia pri zachovaní účelu spracúvania?
          </li>
          <li>
            Sú dotknuté osoby náležite informované o spracúvaní?
          </li>
          <li>
            Ako sú zabezpečené práva dotknutých osôb (prístup, opravu,
            vymazanie, prenosnosť, námietku)?
          </li>
          <li>
            Ak sa na spracúvaní podieľajú sprostredkovatelia, sú s nimi
            uzatvorené zmluvy o spracúvaní podľa čl. 28 GDPR?
          </li>
        </ul>
        <p>
          Výsledkom tohto kroku by malo byť potvrdenie, že spracúvanie je
          zákonné, transparentné a primerané – alebo identifikácia oblastí, kde
          je potrebné zmeniť prístup.
        </p>

        <h2>Krok 3: Identifikácia a hodnotenie rizík</h2>
        <p>
          Toto je jadro DPIA. Cieľom je systematicky identifikovať riziká, ktoré
          spracúvanie predstavuje pre práva a slobody dotknutých osôb, a
          ohodnotiť ich závažnosť.
        </p>

        <h3>Typy hrozieb a rizík</h3>
        <p>Pri identifikácii rizík sa zamerajte na typické hrozby:</p>
        <ul>
          <li>
            <strong>Neoprávnený prístup</strong> – úniky dát, kybernetické
            útoky, interné zneužitie prístupu
          </li>
          <li>
            <strong>Neoprávnená zmena údajov</strong> – modifikácia alebo
            manipulácia s osobnými údajmi
          </li>
          <li>
            <strong>Strata údajov</strong> – nedostupnosť alebo trvalá strata
            osobných údajov
          </li>
          <li>
            <strong>Neprimerané alebo nezákonné spracúvanie</strong> – použitie
            údajov nad rámec súhlasu alebo právneho základu
          </li>
          <li>
            <strong>Diskriminácia alebo sociálna ujma</strong> – napríklad
            profilovanie vedúce k nespravodlivému rozhodnutiu
          </li>
        </ul>

        <h3>Hodnotenie pravdepodobnosti a závažnosti</h3>
        <p>
          Pre každé identifikované riziko ohodnoťte dve dimenzie:
        </p>
        <ul>
          <li>
            <strong>Pravdepodobnosť</strong> – ako pravdepodobné je, že hrozba
            nastane (nízka / stredná / vysoká)
          </li>
          <li>
            <strong>Závažnosť dopadu</strong> – aký vážny by bol dopad na
            dotknutú osobu v prípade realizácie hrozby (nízka / stredná /
            vysoká)
          </li>
        </ul>
        <p>
          Kombináciou týchto dvoch dimenzií získate celkovú úroveň rizika. Tá
          určuje, aká naliehavá a rozsiahla musí byť odozva vo forme opatrení.
        </p>

        <h2>Krok 4: Návrh a dokumentácia opatrení</h2>
        <p>
          Pre každé identifikované riziko navrhnite konkrétne opatrenia, ktoré
          znížia jeho pravdepodobnosť alebo závažnosť. Opatrenia môžu byť
          technické alebo organizačné:
        </p>
        <ul>
          <li>
            <strong>Technické opatrenia</strong> – šifrovanie údajov, pseudonymizácia,
            kontrola prístupu, dvojfaktorová autentifikácia, zálohovanie,
            logovanie, penetračné testy
          </li>
          <li>
            <strong>Organizačné opatrenia</strong> – politiky a postupy,
            školenia zamestnancov, zmluvy so sprostredkovateľmi, procesy
            vybavovania žiadostí dotknutých osôb, plán reakcie na incidenty
          </li>
        </ul>
        <p>
          Pre každé opatrenie uveďte, kto je za jeho implementáciu zodpovedný
          a v akom termíne bude zavedené. Po zavedení opatrení znovu ohodnoťte
          <strong> reziduálne riziko</strong> – riziko, ktoré zostáva aj po
          zavedení opatrení.
        </p>

        <h2>Krok 5: Konzultácia so zodpovednou osobou (DPO)</h2>
        <p>
          Ak má prevádzkovateľ určeného DPO, je povinný ho konzultovať pri
          vypracúvaní DPIA. DPO preskúma celý dokument, overí správnosť
          hodnotenia rizík a primeranos navrhnutých opatrení, a vydá odporúčanie
          alebo výhrady. Stanovisko DPO by malo byť zdokumentované.
        </p>
        <p>
          Aj keď DPO nemáte, zvážte zapojenie externého konzultanta alebo
          právnika so znalosťou GDPR, najmä pri komplexných spracúvaniach.
        </p>

        <h2>Krok 6: Záver a schválenie</h2>
        <p>
          Na záver DPIA uveďte celkový záver o úrovni reziduálnych rizík:
        </p>
        <ul>
          <li>
            <strong>Riziká sú prijateľné</strong> – spracúvanie môže začať
            (resp. pokračovať), DPIA je zdokumentovaná a uložená
          </li>
          <li>
            <strong>Riziká sú príliš vysoké</strong> – spracúvanie nemôže začať
            bez predchádzajúcej konzultácie s dozorným orgánom podľa čl. 36
            GDPR, alebo bez zásadnej zmeny v spracúvaní
          </li>
        </ul>
        <p>
          DPIA by mal schváliť vedúci pracovník prevádzkovateľa (napr. konateľ,
          generálny riaditeľ alebo príslušný manažér). Schválenie by malo byť
          zaznamenané spolu s dátumom.
        </p>

        <h2>Kedy sa obrátiť na dozorný orgán?</h2>
        <p>
          Ak DPIA ukáže, že reziduálne riziká zostávajú <strong>vysoké</strong>{" "}
          aj po zavedení všetkých primeraných opatrení, je prevádzkovateľ
          povinný pred začatím spracúvania konzultovať s dozorným orgánom
          (predchádzajúca konzultácia podľa čl. 36 GDPR). Dozorný orgán má
          8 týždňov (v komplexných prípadoch 14 týždňov) na vydanie stanoviska.
          Ak vydá záporné stanovisko, spracúvanie nemôže začať.
        </p>

        <h2>Uchovávanie a revízia DPIA</h2>
        <p>
          Hotovú DPIA uložte spolu so všetkými podpornými dokumentmi. GDPR
          nepredpisuje konkrétnu lehotu uchovávania, ale odporúča sa uchovávať
          DPIA minimálne po dobu, počas ktorej spracúvanie prebieha, plus
          primeranú dobu po jeho ukončení.
        </p>
        <p>
          Pravidelne – minimálne raz ročne – overujte, či závery DPIA zostávajú
          platné. Revízia je povinná vždy pri podstatnej zmene účelu, rozsahu,
          použitých technológií alebo kontextu spracúvania.
        </p>
      </ArticleLayout>
      <CTA
        title="Chcete mať DPIA hotovú rýchlo a správne?"
        description="Pripravujeme nástroj, ktorý vás prevedie každým krokom a vygeneruje štruktúrovanú DPIA dokumentáciu."
        primaryLabel="Získať beta prístup"
        primaryHref="/sablona-dpia"
        secondaryLabel="Stiahnuť šablónu"
        secondaryHref="/sablona-dpia"
      />
    </>
  );
}
