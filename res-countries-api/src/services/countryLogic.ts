import { ICountry, Region } from "../interfaces/country";

export class CountryLogic {
  /**
   * Pesquisa países pelo nome
   */
  searchByName(countries: ICountry[], term: string): ICountry[] {
    const lowerTerm = term.toLowerCase();
    return countries.filter(c =>
      c.name.common.toLowerCase().includes(lowerTerm) ||
      c.name.official.toLowerCase().includes(lowerTerm)
    );
  }

  /**
   * Filtra países por região.
   */
  filterByRegion(countries: ICountry[], region: Region): ICountry[] {
    return countries.filter(c => c.region === region);
  }
}
