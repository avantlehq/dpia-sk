import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Príklady DPIA – Kedy je posúdenie vplyvu potrebné?",
  description:
    "Reálne príklady spracúvaní, ktoré vyžadujú DPIA: kamerové systémy, HR monitorovanie, AI nástroje, zdravotnícke dáta a profilovanie.",
  keywords: [
    "DPIA príklady",
    "kamerový systém DPIA",
    "HR systém DPIA",
    "AI DPIA",
    "zdravotnícke údaje DPIA",
    "profilovanie DPIA",
    "príklady posúdenia vplyvu",
  ],
  alternates: { canonical: "https://dpia.sk/priklady" },
};

const examples = [
  {
    title: "Kamerový systém (CCTV)",
    category: "Fyzická bezpečnosť",
    riskLevel: "Vysoké" as const,
    dpiaRequired: true,
    description:
      "Prevádzkovateľ (napr. obchodné centrum, zamestnávateľ, správca budovy) inštaluje kamerový systém na monitorovanie priestorov s vysokou frekvenciou pohybu osôb. Záznamy sú uchovávané a môžu byť použité pri vyšetrovaní incidentov.",
    why: "Ide o systematické monitorovanie verejne prístupných alebo pracovných miest. Pri rozsiahlejších systémoch s dlhou dobou uchovávania alebo analytickými funkciami (napr. rozoznávanie tváre) je riziko ešte vyššie.",
    keyConsiderations: [
      "Rozsah pokrytia – monitorované plochy a počet kamier",
      "Doba uchovávania záznamov (bežne 72 hodín, dlhšia uchovávanie vyžaduje odôvodnenie)",
      "Prístup k záznamom – kto a za akých podmienok",
      "Informovanie osôb (označenie priestorov, informačné tabule)",
      "Použitie analytiky – rozoznávanie tváre automaticky vyžaduje DPIA",
      "Odovzdávanie záznamov tretím stranám (polícia, poisťovňa)",
    ],
  },
  {
    title: "HR systém a monitorovanie zamestnancov",
    category: "Ľudské zdroje",
    riskLevel: "Vysoké" as const,
    dpiaRequired: true,
    description:
      "Zamestnávateľ zavádza softvér na sledovanie produktivity zamestnancov – zaznamenáva čas strávený na webových stránkach, aktivitu klávesnice, snímky obrazovky alebo pohyb na pracovisku. Systém môže zahŕňať aj automatizované hodnotenie výkonu.",
    why: "Zamestnanci sú zraniteľnou skupinou s obmedzenou možnosťou slobodne odmietnuť. Monitorovanie je systematické a potenciálne narúša dôstojnosť a súkromie. Automatizované hodnotenie môže mať právne následky (výpoveď, bonusy).",
    keyConsiderations: [
      "Právny základ – oprávnený záujem musí byť dôkladne zdôvodnený",
      "Rozsah monitorovania – len pracovné zariadenia a čas",
      "Transparentnosť voči zamestnancom (informovanie, interné smernice)",
      "Minimalizácia – zbierať len nevyhnutné údaje",
      "Automatizované rozhodovanie s vplyvom na pracovný pomer",
      "Konzultácia so zástupcami zamestnancov",
    ],
  },
  {
    title: "Nástroj s umelou inteligenciou (AI)",
    category: "Technológie",
    riskLevel: "Vysoké" as const,
    dpiaRequired: true,
    description:
      "Firma nasadzuje AI nástroj na automatizované spracúvanie životopisov uchádzačov o prácu, hodnotenie bonity klientov alebo personalizáciu obsahu na základe správania. Systém vytvára profily a na ich základe generuje skóre alebo odporúčania.",
    why: "AI systémy typicky kombinujú viacero kritérií EDPB: profilovanie, automatizované rozhodovanie s právnym účinkom, potenciálne citlivé údaje, inovatívna technológia. DPIA je takmer vždy povinná.",
    keyConsiderations: [
      "Transparentnosť algoritmu – dotknuté osoby musia byť informované",
      "Právo na ľudský zásah pri automatizovaných rozhodnutiach (čl. 22 GDPR)",
      "Testovanie na predpojatosť (bias) a diskrimináciu",
      "Kvalita a presnosť vstupných údajov",
      "Bezpečnosť modelu a ochrana pred manipuláciou",
      "Právny základ – pri profilovaní na súhlas alebo oprávnený záujem",
    ],
  },
  {
    title: "Zdravotnícke údaje a elektronické zdravotníctvo",
    category: "Zdravotníctvo",
    riskLevel: "Vysoké" as const,
    dpiaRequired: true,
    description:
      "Zdravotnícke zariadenie alebo poskytovateľ digitálneho zdravotníctva spracúva zdravotné záznamy pacientov v cloudovom systéme, zdieľa ich s inými zdravotníckymi zariadeniami alebo ich využíva na výskumné a štatistické účely.",
    why: "Zdravotné údaje sú osobitnou kategóriou podľa čl. 9 GDPR. Ich spracúvanie je štandardne zakázané s výnimkami. Akékoľvek rozsiahlejšie spracúvanie zdravotných údajov si vyžaduje DPIA.",
    keyConsiderations: [
      "Právny základ podľa čl. 9 ods. 2 GDPR (napr. zdravotná starostlivosť, výskum)",
      "Prísne riadenie prístupu – len oprávnení zdravotnícki pracovníci",
      "Šifrovanie dát v pokoji aj pri prenose",
      "Pseudonymizácia alebo anonymizácia pri výskumnom využití",
      "Cezhraničný prenos – cloud mimo EÚ/EHP vyžaduje dodatočné záruky",
      "Práva pacientov – prístup, oprava, prenosnosť zdravotných záznamov",
    ],
  },
  {
    title: "Profilovanie a cielená reklama",
    category: "Marketing",
    riskLevel: "Stredné" as const,
    dpiaRequired: true,
    description:
      "E-commerce platforma alebo digitálna reklamná agentúra zbiera rozsiahle údaje o správaní používateľov (navštívené stránky, nákupy, kliknutia), kombinuje ich s demografickými a geografickými údajmi a využíva ich na personalizovanú reklamu.",
    why: "Profilovanie na základe správania je jedným z kritérií EDPB. Pri rozsiahlom spracúvaní (veľký počet používateľov) a kombinovaní údajov z rôznych zdrojov je DPIA spravidla povinná.",
    keyConsiderations: [
      "Právny základ – súhlas (cookiewall) alebo oprávnený záujem s balančným testom",
      "Transparentnosť – používatelia musia vedieť, čo sa s ich údajmi deje",
      "Právo namietať a odhlásiť sa z profilovania",
      "Minimalizácia – zbierať len nevyhnutné údaje pre konkrétny reklamný cieľ",
      "Doba uchovávania profilov",
      "Zdieľanie profilov s reklamnými sieťami a tretími stranami",
    ],
  },
];

export default function PrikladyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Prax
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Príklady DPIA v praxi
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Reálne scenáre spracúvania osobných údajov, ktoré najčastejšie
            vyžadujú vypracovanie DPIA podľa GDPR.
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {examples.map((example, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    {example.category}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900">
                    {example.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs text-gray-500">Úroveň rizika</span>
                    <Badge
                      variant={
                        example.riskLevel === "Vysoké" ? "red" : "orange"
                      }
                    >
                      {example.riskLevel} riziko
                    </Badge>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs text-gray-500">DPIA</span>
                    <Badge variant={example.dpiaRequired ? "red" : "green"}>
                      {example.dpiaRequired ? "Povinná" : "Nepovinná"}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 py-6 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Popis situácie
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {example.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Prečo je DPIA povinná?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {example.why}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Kľúčové oblasti posúdenia
                  </h3>
                  <ul className="space-y-2">
                    {example.keyConsiderations.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-blue-900 text-sm font-semibold mb-1">
              Dôležité upozornenie
            </p>
            <p className="text-blue-800 text-sm leading-relaxed">
              Príklady na tejto stránke majú ilustratívny charakter. Konkrétna
              povinnosť vypracovať DPIA závisí od celkového kontextu
              spracúvania – rozsahu, použitých technológií, kategórií údajov a
              ďalších faktorov. Pri pochybnostiach konzultujte s DPO alebo
              právnym poradcom. Táto stránka neposkytuje právne poradenstvo.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Vypracujte DPIA pre váš prípad použitia"
        description="Náš online nástroj vám pomôže posúdiť konkrétne spracúvanie a vygenerovať dokumentáciu DPIA."
        primaryLabel="Prihlásiť sa do beta"
        primaryHref="/sablona-dpia"
        secondaryLabel="Ako vypracovať DPIA?"
        secondaryHref="/ako-vypracovat-dpia"
      />
    </>
  );
}
