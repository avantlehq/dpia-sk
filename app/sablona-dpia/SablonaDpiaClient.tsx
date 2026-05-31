"use client";

import { useState } from "react";

const checklistItems = [
  "Popis spracovateľskej operácie (účel, právny základ, kategórie údajov)",
  "Identifikácia dotknutých osôb a príjemcov údajov",
  "Posúdenie nevyhnutnosti a primeranosti spracúvania",
  "Identifikácia hrozieb a hodnotenie rizík (pravdepodobnosť × závažnosť)",
  "Navrhnuté technické a organizačné opatrenia",
  "Hodnotenie reziduálnych rizík po zavedení opatrení",
  "Zapojenie DPO – stanovisko zodpovednej osoby",
  "Záver a rozhodnutie o začatí / nepovolení spracúvania",
  "Schválenie prevádzkovateľom a dátum",
  "Plán revízie DPIA",
];

const betaFeatures = [
  {
    title: "Sprievodca krok za krokom",
    desc: "Štruktúrovaný formulár, ktorý vás prevedie každou časťou DPIA bez znalosti právnej terminológie.",
  },
  {
    title: "Hodnotenie rizík s matricou",
    desc: "Interaktívna matica rizík s automatickým výpočtom úrovne rizika a odporúčanými opatreniami.",
  },
  {
    title: "Export do PDF a Word",
    desc: "Hotovú DPIA exportujete do profesionálne naformátovaného dokumentu vhodného pre audity.",
  },
  {
    title: "Knižnica typových opatrení",
    desc: "Databáza overených technických a organizačných opatrení podľa kategórie rizika.",
  },
  {
    title: "Sledovanie revízií",
    desc: "História zmien a automatické pripomienky pre pravidelnú revíziu platnosti DPIA.",
  },
  {
    title: "Viacero DPIA v jednom účte",
    desc: "Spravujte všetky DPIA vašej organizácie na jednom mieste s možnosťou zdieľania s DPO.",
  },
];

export function SablonaDpiaClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Zadajte platnú e-mailovú adresu.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Registrácia zlyhala. Skúste znova.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Registrácia zlyhala. Skúste znova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Čoskoro k dispozícii
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            DPIA šablóna a online nástroj
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Stiahnite si bezplatnú šablónu DPIA a zaregistrujte sa do beta
            zoznamu nášho online nástroja, ktorý vám ušetrí hodiny práce.
          </p>
        </div>
      </section>

      {/* Email signup */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Získajte beta prístup
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Prihláste sa a pošleme vám odkaz na stiahnutie šablóny DPIA.
              Budete tiež medzi prvými, kto vyskúša náš online nástroj.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-700 font-semibold text-lg mb-1">
                  Ďakujeme za registráciu!
                </div>
                <p className="text-green-600 text-sm">
                  Pošleme vám e-mail so šablónou a informáciami o beta prístupe.
                  Sledujte svoju schránku.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pracovný e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vas@firma.sk"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Registrujem..." : "Prihlásiť sa do beta zoznamu"}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Žiadny spam. Odhlásenie kedykoľvek. Vaše údaje spracúvame
                  podľa zásad ochrany osobných údajov.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Checklist preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Čo obsahuje naša DPIA šablóna?
            </h2>
            <p className="mt-3 text-gray-500">
              Štruktúrovaný checklist pokrývajúci všetky požiadavky čl. 35 GDPR.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <ul className="space-y-3">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Beta features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Čo bude obsahovať online nástroj
            </h2>
            <p className="mt-3 text-gray-500">
              Viac než len šablóna – komplexný nástroj pre DPO a firmy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {betaFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Pripravte sa na DPIA ešte dnes
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Zaregistrujte sa a získajte šablónu zadarmo. Online nástroj spustíme
            čoskoro.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              Prihlásiť sa do beta zoznamu
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
