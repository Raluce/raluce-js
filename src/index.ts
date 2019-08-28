import axios from 'axios';
import { Franchise, build as buildFranchise } from './models/Franchise';

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
}

export default Raluce;
