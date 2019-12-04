import Customer from './customer';

export interface ShoppingCart {
  franchiseId: string;
  customer: Customer;
  tip: number;
  note: string;
  type: OrderType;
  allowedSMS: boolean;
  products: [{
    id: string;
    quantity: number;
    options: [{
      id: string;
      choices: [{
        id: string
      }]
    }]
  }]
}

export interface ShoppingCartResponse {
  id: string;
  url: string;
}

export enum OrderType {
  delivery = 'delivery',
  pickup = 'pickup'
}

export default ShoppingCart;
