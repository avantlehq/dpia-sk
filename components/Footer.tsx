import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-white font-bold text-lg">dpia.sk</span>
            <p className="mt-2 text-sm leading-relaxed">
              Slovenský praktický portál o posúdení vplyvu na ochranu osobných
              údajov (DPIA) podľa GDPR.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-3">Obsah</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-3">Kontakt</p>
            <p className="text-sm">{siteConfig.email}</p>
            <p className="mt-4 text-sm">
              Chystáme online nástroj na tvorbu DPIA.{" "}
              <Link href="/sablona-dpia" className="text-blue-400 hover:text-blue-300">
                Prihláste sa do beta zoznamu.
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs">
            © {new Date().getFullYear()} dpia.sk – Všetky práva vyhradené
          </p>
          <p className="text-xs">
            Web slúži na informačné účely, nie ako právne poradenstvo.
          </p>
        </div>
      </div>
    </footer>
  );
}
