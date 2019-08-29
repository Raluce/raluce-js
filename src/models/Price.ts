export interface Price {
  cost: number;
  tax: number;
  currency: string;
};

export function build(raw: any): Price {
  let price = {} as Price;

  price.cost = raw.cost;
  price.tax = raw.tax;
  price.currency = raw.currency || 'USD';

  return price;
}

export default Price;
