export interface Address {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export function build(raw: any): Address {
  let address = <Address>{};

  address.line1 = raw.line1;
  address.line2 = raw.line2;
  address.city = raw.city;
  address.state = raw.state;
  address.zipcode = raw.zipcode;
  address.country = raw.country;

  return address;
}

export default Address;
