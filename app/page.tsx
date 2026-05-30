import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/Card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "DPIA.sk – Posúdenie vplyvu na ochranu osobných údajov",
  description:
    "Slovenský praktický portál o DPIA. Zistite, čo je DPIA, kedy je povinná podľa GDPR, ako ju vypracovať a stiahnite si šablónu.",
  alternates: { canonical: siteConfig.url },
};

const topics = [
  {
    title: "Čo je DPIA?",
    description:
      "Posúdenie vplyvu na ochranu osobných údajov – definícia, účel a právny základ v GDPR.",
    href: "/co-je-dpia",
    badge: "Základy",
  },
  {
    title: "Kedy je DPIA povinná?",
    description:
      "Konkrétne situácie a kritériá z článku 35 GDPR, pri ktorých musíte DPIA vypracovať.",
    href: "/kedy-je-dpia-povinne",
    badge: "Povinnosť",
  },
  {
    title: "Ako vypracovať DPIA?",
    description:
      "Krokový návod: od popisu spracúvania cez identifikáciu rizík až po dokumentáciu záverov.",
    href: "/ako-vypracovat-dpia",
    badge: "Postup",
  },
  {
    title: "Šablóna DPIA",
    description:
      "Stiahnite si štruktúrovanú šablónu a checklist. Prihláste sa do beta zoznamu nášho nástroja.",
    href: "/sablona-dpia",
    badge: "Nástroj",
  },
  {
    title: "Príklady použitia",
    description:
      "Reálne scenáre: kamerové systémy, HR systémy, AI nástroje, zdravotnícke dáta a ďalšie.",
    href: "/priklady",
    badge: "Prax",
  },
  {
    title: "Slovník pojmov",
    description:
      "Prehľad kľúčových pojmov GDPR a DPIA v slovenčine s praktickým vysvetlením.",
    href: "/slovnik",
    badge: "Pojmy",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Slovenský DPIA portál
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Posúdenie vplyvu na ochranu osobných údajov
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Praktický sprievodca DPIA pre slovenské firmy, DPO a právnikov.
            Zistite, kedy je DPIA povinná, ako ju vypracovať a čo musí
            obsahovať.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kedy-je-dpia-povinne"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Kedy je DPIA povinná?
            </Link>
            <Link
              href="/sablona-dpia"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Získať DPIA checklist
            </Link>
            <Link
              href="/sablona-dpia"
              className="border border-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Prihlásiť sa do beta
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Čo sa na dpia.sk dozviete
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Všetko o DPIA na jednom mieste, v slovenčine.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Card
                key={topic.href}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                badge={topic.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Short explainer */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Čo je DPIA?
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            DPIA (Data Protection Impact Assessment) alebo posúdenie vplyvu na
            ochranu osobných údajov je štruktúrovaný proces, ktorý pomáha
            organizáciám identifikovať a minimalizovať riziká spojené so
            spracúvaním osobných údajov.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            GDPR v článku 35 ukladá povinnosť vypracovať DPIA vždy, keď
            spracúvanie môže viesť k{" "}
            <strong>vysokému riziku pre práva a slobody fyzických osôb</strong>.
            Ide najmä o nové technológie, rozsiahle spracúvanie citlivých údajov
            alebo systematické monitorovanie osôb.
          </p>
          <div className="mt-8">
            <Link
              href="/co-je-dpia"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
            >
              Prečítať celý článok o DPIA →
            </Link>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Pre koho je dpia.sk určený?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Zodpovední za ochranu údajov (DPO)",
                desc: "Praktické návody, šablóny a prehľad povinností pri vypracúvaní DPIA.",
              },
              {
                title: "Právnici a konzultanti",
                desc: "Aktuálne informácie o požiadavkách GDPR a checklist pre klientov.",
              },
              {
                title: "Firmy a organizácie",
                desc: "Zistite, či vaše spracúvanie vyžaduje DPIA a ako ju správne zdokumentovať.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
