import { Product } from '../models/Product';
import { ProductDto, ProductOptionDto } from '../models/ProductDto';

function sortById(a: any, b: any): number {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;

  return 0;
}

export function mapProductToProductDto(product: Product): ProductDto {
  const productDto = {} as ProductDto;

  productDto.id = product.id;

  productDto.options = product.options.map(o => {
    const productOption = {} as ProductOptionDto;
    productOption.id = o.id;
    productOption.choices = o.choices.map(c => ({ id: c.id })).sort(sortById);

    return productOption;
  }).sort(sortById);

  return productDto;
}
