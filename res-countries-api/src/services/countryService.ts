import axios from "axios";
import { ICountry } from "../interfaces/country";

const BASE_URL = "https://restcountries.com/v3.1";

export class CountryService {
  async getAll(): Promise<ICountry[]> {
    const response = await axios.get<ICountry[]>(`${BASE_URL}/all?fields=name,flags`);
    return response.data;
  }

  async getByName(name: string): Promise<ICountry[]> {
    const response = await axios.get<ICountry[]>(`${BASE_URL}/name/${name}`);
    return response.data;
  }

  async getByRegion(region: string): Promise<ICountry[]> {
    const response = await axios.get<ICountry[]>(`${BASE_URL}/region/${region}`);
    return response.data;
  }
}

