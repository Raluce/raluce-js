export interface Brand {
  id: string;
  name: string;
  description: string | null;
  color: string;
  logo: string | null;
  banner: string | null;
}

export function build(raw: any): Brand {
  let brand = {} as Brand;

  brand.id = raw.id;
  brand.name = raw.name;
  brand.description = raw.description;
  brand.color = raw.color;
  brand.logo = raw.logo;
  brand.banner = raw.banner;

  return brand;
}

export default Brand;
