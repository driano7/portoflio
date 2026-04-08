import type { SeoJsonLdInput } from "@/lib/seo/types";
import { normalizeJsonLdInput, serializeJsonLd } from "@/lib/seo/buildJsonLd";

interface JsonLdProps {
  data: SeoJsonLdInput | null | undefined;
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  if (!data) {
    return null;
  }

  const blocks = normalizeJsonLdInput(data);

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          id={id && blocks.length === 1 ? id : undefined}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(block) }}
        />
      ))}
    </>
  );
}

