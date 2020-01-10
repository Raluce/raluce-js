import axios from 'axios';
import * as converterFunctions from './converters';
import { BrandWithFranchises, build as buildBrand, FranchiseSimplified, buildFranchiseSimplified } from './models/BrandWithFranchises';
import { Franchise, build as buildFranchise } from './models/Franchise';
import { ShoppingCart, ShoppingCartResponse } from './models/ShoppingCart';

class Raluce {
  API_URL = "http://localhost:5000/v1.2";
  displayedLanguage = "en";
  displayedCurrency = "usd";
  converters = converterFunctions;

  public async getBrandById(id: string): Promise<BrandWithFranchises | null> {
    try {
      let brandResponse = await axios.get(`${this.API_URL}/brands/${id}`);
      let franchisesResponse = await axios.get(`${this.API_URL}/public/brands/${brandResponse.data.id}/franchises`);
      return buildBrand(brandResponse.data, franchisesResponse.data);
    } catch (e) {
      return null;
    }
  }

  public async getFranchiseById(id: string): Promise<Franchise | null> {
    try {
      let response = await axios.get(`${this.API_URL}/public/franchises/${id}`);

      return buildFranchise(response.data, this.displayedLanguage, this.displayedCurrency);
    } catch (e) {
      return null;
    }
  }

  public async getFranchiesDeliveryingToZipcode(brandId: string, zipcode: string): Promise<[FranchiseSimplified] | []> {
    try {
      let response = await axios.get(`${this.API_URL}/brands/${brandId}/franchises?deliversToZipcode=${zipcode}`);

      return response.data.map(buildFranchiseSimplified);
    } catch (e) {
      return [];
    }
  }

  public async createShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCartResponse | null> {
    try {
      let { data } = await axios.post(`${this.API_URL}/shoppingcarts`, shoppingCart);
      let shoppingCartResponse = {} as ShoppingCartResponse;

      shoppingCartResponse.id = data.id;
      shoppingCartResponse.url = data.url;

      return shoppingCartResponse;
    } catch (e) {
      return null
    }
  }
}

export default Raluce;
