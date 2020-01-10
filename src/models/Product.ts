export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image: string | null;
  isTaxable: boolean;
  modifiers: Modifier[];
}

export interface Modifier {
  id: string,
  name: string,
  type: string,
  min: number,
  max: number,
  choices: ProductChoice[]
};

export interface ProductChoice {
  id: string;
  name: string;
  internalName: string;
  price: number;
}

export function buildModifier(raw: any, displayedLanguage: string, displayedCurrency: string): Modifier {
  let option = {} as Modifier;

  option.id = raw.id;
  option.name = raw.name[displayedLanguage];
  option.type = raw.type;
  option.min = raw.min;
  option.max = raw.max;
  option.choices = raw.choices.map(buildProductChoice, displayedLanguage, displayedCurrency);

  return option;
}

export function buildProductChoice(raw: any, displayedLanguage: string, displayedCurrency: string): ProductChoice {
  let choice = {} as ProductChoice;

  choice.id = raw.id;
  choice.name = raw.name[displayedLanguage];
  choice.internalName = raw.internalName
  choice.price = raw[displayedCurrency];

  return choice;
}

export function build(raw: any, displayedLanguage: string, displayedCurrency: string): Product {
  let product = {} as Product;

  product.id = raw.id;
  product.name = raw.name[displayedLanguage];
  product.description = raw.description[displayedLanguage];
  product.price = raw.price[displayedCurrency];
  product.image = raw.image;
  product.isTaxable = raw.isTaxable;
  product.modifiers = raw.modifiers.map(buildModifier, displayedLanguage, displayedCurrency);

  return product;
}

export default Product;
