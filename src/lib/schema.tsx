type Json = Record<string, unknown>;

export function organizationSchema(input: {
  name: string;
  url: string;
  logoUrl?: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name,
    url: input.url,
    logo: input.logoUrl,
  } as const;
}

export function serviceSchema(input: {
  name: string;
  description: string;
  providerName: string;
  url: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    provider: {
      '@type': 'Organization',
      name: input.providerName,
    },
    url: input.url,
  } as const;
}

export function breadcrumbList(items: Array<{ name: string; url: string }>): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function faqPage(faqs: Array<{ question: string; answer: string }>): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } as const;
}

export function JsonLd({ data }: { data: Json }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}


