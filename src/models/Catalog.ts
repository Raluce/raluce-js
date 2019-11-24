import { Product, build as buildProduct } from './Product';

export interface Catalog {
  id: string;
  name: string;
  description: string | null;
  categories: [Category];
};

export interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export function buildCategory(raw: any): Category {
  let category = {} as Category;

  category.id = raw.id;
  category.name = raw.name;
  category.description = raw.description;
  category.products = raw.products.map(buildProduct);

  return category;
}

export function build(raw: any): Catalog {
  let catalog = {} as Catalog;

  catalog.id = raw.id;
  catalog.name = raw.name;
  catalog.description = raw.description;
  catalog.categories = raw.categories.map(buildCategory);

  return catalog;
}

export default Catalog;
