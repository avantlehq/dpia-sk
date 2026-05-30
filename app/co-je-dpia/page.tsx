import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Čo je DPIA – Posúdenie vplyvu na ochranu osobných údajov",
  description:
    "Vysvetlenie pojmu DPIA (Data Protection Impact Assessment) – čo to je, kde je zakotvené v GDPR a prečo je dôležité.",
  alternates: { canonical: "https://dpia.sk/co-je-dpia" },
};

export default function CoJeDpiaPage() {
  return (
    <>
      <ArticleLayout
        title="Čo je DPIA?"
        description="Posúdenie vplyvu na ochranu osobných údajov (Data Protection Impact Assessment) je povinný analytický proces podľa GDPR."
        badge="Základy"
      >
        <h2>Definícia DPIA</h2>
        <p>
          DPIA (Data Protection Impact Assessment) je v slovenčine{" "}
          <strong>posúdenie vplyvu na ochranu osobných údajov</strong>. Je to
          štruktúrovaný analytický proces, pri ktorom organizácia systematicky
          vyhodnocuje, aký vplyv má plánované alebo existujúce spracúvanie
          osobných údajov na práva a slobody dotknutých osôb.
        </p>
        <p>
          DPIA nie je jednorazový dokument – je to proces, ktorý zahŕňa popis
          spracúvania, posúdenie jeho nevyhnutnosti, identifikáciu rizík a
          návrh opatrení na ich elimináciu alebo minimalizáciu.
        </p>

        <h2>Právny základ – Článok 35 GDPR</h2>
        <p>
          Povinnosť vypracovať DPIA vyplýva z{" "}
          <strong>článku 35 nariadenia GDPR (EÚ) 2016/679</strong>. Podľa
          tohto ustanovenia je prevádzkovateľ povinný pred začatím spracúvania
          vykonať posúdenie vplyvu, ak spracúvanie{" "}
          <em>
            pravdepodobne povedie k vysokému riziku pre práva a slobody
            fyzických osôb
          </em>
          .
        </p>
        <p>
          GDPR neurčuje presnú formu DPIA, ale definuje minimálny obsah, ktorý
          musí obsahovať (pozri nižšie).
        </p>

        <h2>Čo musí DPIA obsahovať?</h2>
        <p>Podľa čl. 35 ods. 7 GDPR musí DPIA obsahovať:</p>
        <ul>
          <li>
            <strong>Systematický popis</strong> zamýšľaných operácií spracúvania
            a účelov spracúvania, vrátane prípadne oprávneného záujmu
            prevádzkovateľa
          </li>
          <li>
            <strong>Posúdenie nevyhnutnosti a primeranosti</strong> operácií
            spracúvania v súvislosti s účelom
          </li>
          <li>
            <strong>Posúdenie rizík</strong> pre práva a slobody dotknutých
            osôb
          </li>
          <li>
            <strong>Opatrenia</strong> plánované na zvládnutie rizík vrátane
            záruk, bezpečnostných opatrení a mechanizmov na zaistenie ochrany
            osobných údajov
          </li>
        </ul>

        <h2>Kto je za DPIA zodpovedný?</h2>
        <p>
          Za vypracovanie DPIA je zodpovedný <strong>prevádzkovateľ</strong> –
          teda subjekt, ktorý určuje účely a prostriedky spracúvania osobných
          údajov. Prevádzkovateľ môže poveriť vypracovaním DPIA interného DPO
          (zodpovedná osoba), externého konzultanta alebo príslušné oddelenie.
        </p>
        <p>
          Ak má prevádzkovateľ určenú{" "}
          <strong>zodpovednú osobu (DPO)</strong>, musí ju do procesu DPIA
          zapojiť – DPO poskytuje rady a overuje správnosť posúdenia. Rovnako
          je vhodné zapojiť aj sprostredkovateľov, ak sú súčasťou spracúvania.
        </p>

        <h2>Kedy treba konzultovať s dozorným orgánom?</h2>
        <p>
          Ak po vykonaní DPIA zostanú <strong>vysoké reziduálne riziká</strong>
          , ktoré prevádzkovateľ nedokáže primerane eliminovať, musí pred
          začatím spracúvania konzultovať s dozorným orgánom (na Slovensku
          Úrad na ochranu osobných údajov SR). Toto sa nazýva{" "}
          <em>predchádzajúca konzultácia</em> podľa čl. 36 GDPR.
        </p>

        <h2>Aký je rozdiel medzi DPIA a záznamy o spracovateľských činnostiach?</h2>
        <p>
          Záznamy o spracovateľských činnostiach (čl. 30 GDPR) sú povinné pre
          väčšinu prevádzkovateľov a slúžia na evidenciu všetkých operácií
          spracúvania. DPIA je hlbší analytický dokument, ktorý sa vyžaduje len
          pri spracúvaniach s vysokým rizikom. DPIA a záznamy nie sú náhradou
          za seba – sú to dve odlišné povinnosti.
        </p>

        <h2>Prečo je DPIA dôležitá?</h2>
        <p>
          DPIA plní viaceré funkcie. Po prvé, núti organizáciu systematicky
          premýšľať o rizikách ešte pred spustením spracúvania – teda vo fáze,
          keď je ešte možné navrhnúť systém inak alebo zvoliť menej invazívne
          riešenie. Po druhé, demonštruje súlad s princípom{" "}
          <em>privacy by design</em> a zodpovednosti (accountability) podľa
          GDPR. Po tretie, slúži ako doklad pre prípad kontroly zo strany
          dozorného orgánu.
        </p>
        <p>
          Organizácie, ktoré vypracujú kvalitnú DPIA, sú lepšie chránené pred
          pokutami a reputačnými škodami. DPIA nie je len formálna povinnosť –
          je to nástroj riadenia rizík v oblasti ochrany osobných údajov.
        </p>

        <h2>Musí byť DPIA zverejnená?</h2>
        <p>
          GDPR nezakladá povinnosť zverejniť DPIA. Je to interný dokument
          prevádzkovateľa. Dozorný orgán však môže požiadať o jeho predloženie
          pri kontrole. Niektoré organizácie sa rozhodujú pre dobrovoľné
          zverejnenie DPIA ako prejav transparentnosti voči verejnosti.
        </p>

        <h2>Ako často treba DPIA aktualizovať?</h2>
        <p>
          DPIA nie je statický dokument. Prevádzkovateľ by mal pravidelne
          overovať, či sú závery DPIA stále platné. Aktualizácia je nevyhnutná
          najmä vtedy, keď sa zmenia účely spracúvania, použité technológie,
          rozsah spracúvania alebo keď sa objavia nové riziká. Doporučuje sa
          revízia minimálne raz ročne alebo pri každej podstatnej zmene
          spracúvania.
        </p>
      </ArticleLayout>
      <CTA
        title="Chcete vypracovať DPIA rýchlejšie?"
        description="Pripravujeme online nástroj, ktorý vás krok za krokom prevedie celým procesom DPIA."
        primaryLabel="Prihlásiť sa do beta"
        primaryHref="/sablona-dpia"
        secondaryLabel="Kedy je DPIA povinná?"
        secondaryHref="/kedy-je-dpia-povinne"
      />
    </>
  );
}
