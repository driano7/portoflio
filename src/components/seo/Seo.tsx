import type { SeoJsonLdInput } from "@/lib/seo/types";

import { JsonLd } from "@/components/seo/JsonLd";

interface SeoProps {
  entities?: SeoJsonLdInput | null;
}

export function Seo({ entities }: SeoProps) {
  if (!entities) {
    return null;
  }

  return <JsonLd data={entities} />;
}

