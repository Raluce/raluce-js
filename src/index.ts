import axios from 'axios';
import { Franchise } from './models/Franchise';
import { Brand } from './models/Brand';

class Raluce {
  API_URL = "https://api.raluce.com/v1";

  public async getFranchiseById(id: string): Promise<Franchise | null> {
    try {
      let response = await axios.get(`${this.API_URL}/franchises/${id}`);

      return <Franchise> response.data;
    } catch (e) {
      return null;
    }
  }
}

export default Raluce;
