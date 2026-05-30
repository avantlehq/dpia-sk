import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Slovník pojmov DPIA a GDPR",
  description:
    "Prehľad kľúčových pojmov GDPR a DPIA v slovenčine: prevádzkovateľ, sprostredkovateľ, dotknutá osoba, reziduálne riziko, DPO a ďalšie.",
  keywords: [
    "GDPR pojmy slovenčina",
    "DPIA slovník",
    "prevádzkovateľ GDPR",
    "sprostredkovateľ GDPR",
    "dotknutá osoba",
    "DPO zodpovedná osoba",
    "osobné údaje definícia",
    "reziduálne riziko",
  ],
  alternates: { canonical: "https://dpia.sk/slovnik" },
};

const terms = [
  {
    term: "DPIA (Data Protection Impact Assessment)",
    sk: "Posúdenie vplyvu na ochranu osobných údajov",
    definition:
      "Štruktúrovaný analytický proces, pri ktorom prevádzkovateľ systematicky identifikuje a hodnotí riziká plánovaného spracúvania osobných údajov pre práva a slobody fyzických osôb. Povinnosť vypracovať DPIA vyplýva z článku 35 GDPR pri spracúvaniach s vysokým rizikom.",
    source: "Čl. 35 GDPR",
  },
  {
    term: "Prevádzkovateľ",
    sk: "Controller (EN)",
    definition:
      "Fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt, ktorý sám alebo spoločne s inými určuje účely a prostriedky spracúvania osobných údajov. Prevádzkovateľ nesie primárnu zodpovednosť za súlad spracúvania s GDPR a je povinný vypracovať DPIA.",
    source: "Čl. 4 ods. 7 GDPR",
  },
  {
    term: "Sprostredkovateľ",
    sk: "Processor (EN)",
    definition:
      "Fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt, ktorý spracúva osobné údaje v mene prevádzkovateľa. Sprostredkovateľ spracúva údaje len na základe dokumentovaných pokynov prevádzkovateľa. Vzťah medzi nimi musí byť ošetrený zmluvou podľa čl. 28 GDPR.",
    source: "Čl. 4 ods. 8 GDPR",
  },
  {
    term: "Dotknutá osoba",
    sk: "Data subject (EN)",
    definition:
      "Identifikovaná alebo identifikovateľná fyzická osoba, ktorej osobné údaje sú predmetom spracúvania. GDPR dotknutým osobám garantuje viaceré práva: právo na prístup, opravu, vymazanie, obmedzenie spracúvania, prenosnosť, námietku a právo nebyť predmetom automatizovaného rozhodovania.",
    source: "Čl. 4 ods. 1 GDPR",
  },
  {
    term: "Osobné údaje",
    sk: "Personal data (EN)",
    definition:
      "Akékoľvek informácie týkajúce sa identifikovanej alebo identifikovateľnej fyzickej osoby. Identifikovateľnou osobou je tá, ktorú možno priamo alebo nepriamo identifikovať, najmä odkazom na identifikátor ako meno, identifikačné číslo, lokalizačné údaje, online identifikátor alebo na jeden či viaceré prvky špecifické pre fyzickú, fyziologickú, genetickú, psychickú, ekonomickú, kultúrnu alebo sociálnu identitu.",
    source: "Čl. 4 ods. 1 GDPR",
  },
  {
    term: "Osobitné kategórie osobných údajov",
    sk: "Special categories of personal data (EN)",
    definition:
      "Citlivé kategórie údajov, ktorých spracúvanie je štandardne zakázané, pokiaľ sa neuplatní niektorá z výnimiek podľa čl. 9 ods. 2 GDPR. Zahŕňajú: rasový alebo etnický pôvod, politické názory, náboženské alebo filozofické presvedčenie, členstvo v odborových organizáciách, genetické údaje, biometrické údaje (ak umožňujú jednoznačnú identifikáciu), zdravotné údaje, údaje o sexuálnom živote alebo sexuálnej orientácii.",
    source: "Čl. 9 GDPR",
  },
  {
    term: "Riziko",
    sk: "Risk (EN)",
    definition:
      "V kontexte GDPR a DPIA ide o pravdepodobnosť a závažnosť potenciálnej ujmy pre dotknuté osoby v dôsledku spracúvania osobných údajov. Ujma môže mať fyzickú, materiálnu alebo nemateriálnu povahu – napríklad diskriminácia, strata zamestnania, finančná strata, poškodenie dobrej povesti alebo porušenie dôvernosti.",
    source: "Recitál 75–76 GDPR",
  },
  {
    term: "Zostatkové riziko (reziduálne riziko)",
    sk: "Residual risk (EN)",
    definition:
      "Riziko, ktoré zostáva po zavedení všetkých plánovaných technických a organizačných opatrení. Ak je reziduálne riziko vysoké, prevádzkovateľ musí pred začatím spracúvania konzultovať s dozorným orgánom (predchádzajúca konzultácia podľa čl. 36 GDPR). Cieľom DPIA je dostať reziduálne riziko na prijateľnú úroveň.",
    source: "Čl. 35–36 GDPR; Usmernenie WP248",
  },
  {
    term: "Opatrenie",
    sk: "Safeguard / Measure (EN)",
    definition:
      "Technické alebo organizačné opatrenie zavedené na zníženie pravdepodobnosti alebo závažnosti rizika pre dotknuté osoby. Medzi technické opatrenia patrí šifrovanie, pseudonymizácia, kontrola prístupu a zálohovanie. Organizačné opatrenia zahŕňajú politiky, školenia, zmluvy, procesy a interné audity.",
    source: "Čl. 25, 32 GDPR",
  },
  {
    term: "Dozorný orgán",
    sk: "Supervisory authority (EN)",
    definition:
      "Nezávislý verejný orgán zodpovedný za monitorovanie uplatňovania GDPR na území príslušného členského štátu. Na Slovensku je dozorným orgánom Úrad na ochranu osobných údajov Slovenskej republiky (UOOU SR) so sídlom v Bratislave. Dozorný orgán môže vydávať usmernenia, vykonávať kontroly a ukladať pokuty.",
    source: "Čl. 51 GDPR; Zákon č. 18/2018 Z. z.",
  },
  {
    term: "DPO – Zodpovedná osoba",
    sk: "Data Protection Officer (EN)",
    definition:
      "Osoba určená prevádzkovateľom alebo sprostredkovateľom, ktorej úlohou je informovať a radiť v oblasti ochrany osobných údajov, monitorovať súlad s GDPR a spolupracovať s dozorným orgánom. DPO musí byť zapojená do procesu DPIA a musí dostávať nevyhnutné zdroje na plnenie svojich úloh. Určenie DPO je povinné pre orgány verejnej moci a niektoré organizácie so špecifickými spracúvaniami.",
    source: "Čl. 37–39 GDPR",
  },
  {
    term: "Pseudonymizácia",
    sk: "Pseudonymisation (EN)",
    definition:
      "Spracúvanie osobných údajov takým spôsobom, že ich už nie je možné priradiť ku konkrétnej dotknutej osobe bez použitia dodatočných informácií, pričom tieto dodatočné informácie sú uchovávané osobitne a podliehajú technickým a organizačným opatreniam. Pseudonymizované údaje sú stále osobnými údajmi. Pseudonymizácia je jedným z odporúčaných opatrení pri DPIA.",
    source: "Čl. 4 ods. 5, Čl. 25 GDPR",
  },
  {
    term: "Predchádzajúca konzultácia",
    sk: "Prior consultation (EN)",
    definition:
      "Povinnosť prevádzkovateľa konzultovať s dozorným orgánom pred začatím spracúvania, ak DPIA ukázala, že spracúvanie by viedlo k vysokému riziku, ktoré prevádzkovateľ nemohol primerane zmierniť. Dozorný orgán má na vydanie stanoviska 8 týždňov (pri komplexných prípadoch až 14 týždňov).",
    source: "Čl. 36 GDPR",
  },
];

export default function SlovnikPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Pojmy
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Slovník pojmov DPIA a GDPR
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Kľúčové pojmy z oblasti ochrany osobných údajov a posúdenia vplyvu
            vysvetlené v slovenčine.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <dl className="space-y-8">
            {terms.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <dt className="font-bold text-gray-900 text-lg">
                      {item.term}
                    </dt>
                    {item.sk && (
                      <p className="text-sm text-gray-500 mt-0.5">{item.sk}</p>
                    )}
                  </div>
                  {item.source && (
                    <span className="flex-shrink-0 inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.source}
                    </span>
                  )}
                </div>
                <dd className="px-6 py-5">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.definition}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-blue-900 text-sm font-semibold mb-1">
              Zdroje a aktuálnosť
            </p>
            <p className="text-blue-800 text-sm leading-relaxed">
              Definície vychádzajú z nariadenia GDPR (EÚ) 2016/679, usmernení
              EDPB (Európskeho výboru pre ochranu údajov) a slovenského zákona
              č. 18/2018 Z. z. o ochrane osobných údajov. Slovník je
              informatívny a nenahrádza právne poradenstvo. Odporúčame overovať
              si aktuálnosť informácií priamo v zdrojových dokumentoch.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Potrebujete vypracovať DPIA?"
        description="Prihláste sa do beta zoznamu a získajte prístup k nášmu online nástroju na tvorbu DPIA."
        primaryLabel="Získať beta prístup"
        primaryHref="/sablona-dpia"
        secondaryLabel="Čo je DPIA?"
        secondaryHref="/co-je-dpia"
      />
    </>
  );
}
