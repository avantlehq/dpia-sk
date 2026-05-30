import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – dpia.sk",
  description:
    "Kontaktujte nás ohľadom portálu dpia.sk alebo sa prihláste do beta zoznamu nášho online nástroja na tvorbu DPIA.",
  alternates: { canonical: "https://dpia.sk/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Kontakt
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            Napíšte nám – radi zodpovieme otázky k obsahu portálu alebo beta
            prístupu.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                E-mailový kontakt
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Pre otázky k obsahu, návrhy na doplnenie alebo hlásenie chýb
                nám napíšte na:
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Beta */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Beta prístup k nástroju
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Zaujíma vás náš online nástroj na tvorbu DPIA? Prihláste sa do
                beta zoznamu a budete medzi prvými, kto ho vyskúša.
              </p>
              <Link
                href="/sablona-dpia"
                className="inline-block bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Prihlásiť sa do beta
              </Link>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Dôležité upozornenie
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Portál dpia.sk slúži výhradne na{" "}
              <strong>informačné a vzdelávacie účely</strong>. Obsah publikovaný
              na tomto webe nepredstavuje právne poradenstvo a nemôže nahradiť
              konzultáciu s advokátom alebo kvalifikovaným odborníkom na
              ochranu osobných údajov.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Každá organizácia má špecifické okolnosti, ktoré môžu ovplyvniť
              rozsah povinností podľa GDPR. Odporúčame vždy konzultovať
              konkrétnu situáciu s právnym poradcom alebo DPO.
            </p>
          </div>

          {/* Useful links */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              Užitočné externé zdroje
            </h3>
            <ul className="space-y-2">
              {[
                {
                  label:
                    "Úrad na ochranu osobných údajov SR (dataprotection.gov.sk)",
                  href: "https://dataprotection.gov.sk",
                },
                {
                  label:
                    "Európsky výbor pre ochranu údajov – EDPB (edpb.europa.eu)",
                  href: "https://edpb.europa.eu",
                },
                {
                  label: "Nariadenie GDPR – plné znenie (EUR-Lex)",
                  href: "https://eur-lex.europa.eu/legal-content/SK/TXT/?uri=CELEX%3A32016R0679",
                },
                {
                  label:
                    "Usmernenie WP248 k DPIA (Guidelines on DPIA) – EDPB",
                  href: "https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-12018-data-protection-impact-assessments_sk",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 text-sm hover:underline"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
