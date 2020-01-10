import { Product, build as buildProduct } from './Product';

export interface Catalog {
  id: string;
  name: Object;
  description: Object | null;
  sections: [Section];
};

export interface Section {
  id: string;
  color: string;
  name: Object;
  description: Object | null;
  products: Product[];
}

export function buildSection(raw: any, displayedLanguage: string, displayedCurrency: string): Section {
  let section = {} as Section;

  section.id = raw.id;
  section.color = raw.color;
  section.name = raw.name[displayedLanguage];
  section.description = raw.description[displayedLanguage];
  section.products = raw.products.map(buildProduct, displayedLanguage, displayedCurrency);

  return section;
}

export function build(raw: any, displayedLanguage: string, displayedCurrency: string): Catalog {
  let catalog = {} as Catalog;

  catalog.id = raw.id;
  catalog.name = raw.name[displayedLanguage];
  catalog.description = raw.description[displayedLanguage];
  catalog.sections = raw.sections.map(buildSection, displayedCurrency);

  return catalog;
}

export default Catalog;
