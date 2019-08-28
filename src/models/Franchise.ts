import { Brand, build as buildBrand } from './Brand';

export interface Franchise {
  id: string,
  phone: string,
  deliveryZipcodes: [string],
  geolocation: {
    latitude: number,
    longitude: number,
  },
  address: {
    line1: string,
    line2: string | null,
    city: string,
    state: string,
    zipcode: string,
    country: string,
  },
  brand: Brand,
  isOpen: boolean
}

export function build(raw: any): Franchise  {
  var { geolocation, address, brand } = raw;

  var franchise = {} as Franchise;

  franchise.id = raw.id;
  franchise.phone = raw.phone;
  franchise.deliveryZipcodes = raw.deliveryZipcodes;
  franchise.geolocation = {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude
  };
  franchise.address = {
    line1: address.line1,
    line2: address.line2,
    city: address.city,
    state: address.state,
    zipcode: address.zipcode,
    country: address.country
  };
  franchise.isOpen = raw.isOpen;
  franchise.brand = buildBrand(brand);

  return franchise;
};

export default Franchise;
