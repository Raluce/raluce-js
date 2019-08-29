import { Price, build as buildPrice } from './Price';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: Price;
  image: string | null;
  isPopular: boolean;
  options: ProductOption[];
}

export interface ProductOption {
  id: string,
  name: string,
  isRequired: boolean,
  type: ProductOptionTypes,
  min: number,
  max: number,
  choices: ProductChoice[]
};

export interface ProductChoice {
  id: string;
  name: string;
  price: Price;
}

export enum ProductOptionTypes {
  chooser = "chooser"
};

export function buildProductOption(raw: any): ProductOption {
  let option = {} as ProductOption;

  option.id = raw.id;
  option.name = raw.name;
  option.isRequired = raw.isRequired;
  option.type = ProductOptionTypes.chooser;
  option.min = raw.min;
  option.max = raw.max;
  option.choices = raw.choices.map(buildProductChoice);

  return option;
}

export function buildProductChoice(raw: any): ProductChoice {
  let choice = {} as ProductChoice;

  choice.id = raw.id;
  choice.name = raw.name;
  choice.price = buildPrice(raw.price);

  return choice;
}

export function build(raw: any): Product {
  let product = {} as Product;

  product.id = raw.id;
  product.name = raw.name;
  product.description = raw.description;
  product.price = buildPrice(raw.price);
  product.image = raw.image;
  product.isPopular = raw.isPopular;
  product.options = raw.options.map(buildProductOption);

  return product;
}

export default Product;
