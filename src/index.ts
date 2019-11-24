import axios from 'axios';
import { BrandWithFranchises, build as buildBrand } from './models/BrandWithFranchises';
import { Franchise, build as buildFranchise } from './models/Franchise';
import { ShoppingCart, ShoppingCartResponse } from './models/ShoppingCart';

class Raluce {
  API_URL = "https://api.raluce.com/v1";

  public async getBrandById(id: string): Promise<BrandWithFranchises | null> {
    try {
      let response = await axios.get(`${this.API_URL}/brands/${id}`);

      return buildBrand(response.data);
    } catch (e) {
      return null;
    }
  }

  public async getFranchiseById(id: string): Promise<Franchise | null> {
    try {
      let response = await axios.get(`${this.API_URL}/franchises/${id}`);

      return buildFranchise(response.data);
    } catch (e) {
      return null;
    }
  }

  public async getFranchiesDeliveryingToZipcode(brandId: string, zipcode: string) {
    try {
      let response = await axios.get(`${this.API_URL}/brands/${brandId}/franchises?deliversToZipcode=${zipcode}`);

      return response.data.map(buildFranchise);
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
