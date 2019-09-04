import axios from 'axios';
import { Franchise, build as buildFranchise } from './models/Franchise';
import { ShoppingCart, ShoppingCartResponse } from './models/ShoppingCart';

class Raluce {
  API_URL = "https://api.raluce.com/v1";

  public async getFranchiseById(id: string): Promise<Franchise | null> {
    try {
      let response = await axios.get(`${this.API_URL}/franchises/${id}`);

      var res = buildFranchise(response.data);

      return res;
    } catch (e) {
      return null;
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
