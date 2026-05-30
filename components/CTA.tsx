import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Pripravujeme online nástroj na tvorbu DPIA",
  description = "Prihláste sa do beta zoznamu a budete medzi prvými, kto ho vyskúša.",
  primaryLabel = "Získať beta prístup",
  primaryHref = "/sablona-dpia",
  secondaryLabel = "Zistiť viac",
  secondaryHref = "/co-je-dpia",
}: CTAProps) {
  return (
    <section className="bg-blue-800 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        <p className="mt-4 text-blue-100 text-lg">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border border-blue-300 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
