export interface BrandWithFranchises {
  id: string;
  name: string;
  description: string | null;
  color: string;
  logo: string | null;
  banner: string | null;
  franchises: [FranchiseSimplified];
}

export interface FranchiseSimplified {
  id: string;
  phone: string;
  deliveryZipcodes: [string];
  isOpen: Boolean;
  geolocation: {
    latitude: number,
    longitude: number,
  };
  address: {
    line1: string;
    line2: string | null;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
}

export function build(raw: any): BrandWithFranchises {
  let brand = {} as BrandWithFranchises;

  brand.id = raw.id;
  brand.name = raw.name;
  brand.description = raw.description;
  brand.color = raw.color;
  brand.logo = raw.color;
  brand.banner = raw.banner;
  brand.franchises = raw.franchises.map(buildFranchiseSimplified)

  return brand;
}

export function buildFranchiseSimplified(raw: any) {
  var { geolocation, address } = raw;

  var franchise = {} as FranchiseSimplified;

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

  return franchise;
}


export default BrandWithFranchises;
