import type { Metadata } from "next";
import { SablonaDpiaClient } from "./SablonaDpiaClient";

export const metadata: Metadata = {
  title: "DPIA šablóna a checklist – Stiahnuť zadarmo",
  description:
    "Stiahnite si bezplatnú šablónu DPIA a prihláste sa do beta zoznamu nášho online nástroja pre vypracovanie posúdenia vplyvu na ochranu osobných údajov.",
  keywords: [
    "DPIA šablóna",
    "DPIA template",
    "DPIA checklist",
    "stiahnuť DPIA",
    "DPIA vzor",
    "DPIA formulár Slovensko",
  ],
  alternates: { canonical: "https://dpia.sk/sablona-dpia" },
};

export default function SablonaDpiaPage() {
  return <SablonaDpiaClient />;
}
