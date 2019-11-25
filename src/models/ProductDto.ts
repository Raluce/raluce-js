export interface ProductDto {
  id: string;
  options: ProductOptionDto[];
}

export interface ProductOptionDto {
  id: string;
  choices: any;
}
