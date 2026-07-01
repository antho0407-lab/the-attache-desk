// Central registry of posting cities. Country codes are factual ISO 3166-1
// alpha-2 codes; "status" reflects whether a full guide set is published yet.
export type City = {
  slug: string;
  name: string;
  country: string;
  cc: string; // ISO 3166-1 alpha-2
  note: string;
  status: 'active' | 'soon';
};

export const cities: City[] = [
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    cc: 'FR',
    note: 'Bilateral missions and OECD/UNESCO postings.',
    status: 'active',
  },
  {
    slug: 'geneva',
    name: 'Geneva',
    country: 'Switzerland',
    cc: 'CH',
    note: 'UN Office, WTO, WHO and permanent missions.',
    status: 'active',
  },
  {
    slug: 'brussels',
    name: 'Brussels',
    country: 'Belgium',
    cc: 'BE',
    note: 'EU institutions, NATO and bilateral posts.',
    status: 'active',
  },
  {
    slug: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    cc: 'AT',
    note: 'UNOV, IAEA, OSCE and OPEC.',
    status: 'active',
  },
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    cc: 'GB',
    note: 'Bilateral missions and IMO.',
    status: 'soon',
  },
  {
    slug: 'new-york',
    name: 'New York',
    country: 'United States',
    cc: 'US',
    note: 'UN Headquarters and permanent missions.',
    status: 'soon',
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    cc: 'SG',
    note: 'Bilateral posts and regional offices.',
    status: 'soon',
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    cc: 'JP',
    note: 'Bilateral missions and UN University.',
    status: 'soon',
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
