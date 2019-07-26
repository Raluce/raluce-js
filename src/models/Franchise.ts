import Brand from './Brand';

export interface Franchise {
  id: string,
  phone: string,
  deliveryZipcodes: [string],
  geolocation: {
    latitude: string,
    longitude: string,
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
}

export default Franchise;
