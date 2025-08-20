import { ICountry, Region } from "../interfaces/country";
export declare class CountryLogic {
    /**
     * Pesquisa países pelo nome
     */
    searchByName(countries: ICountry[], term: string): ICountry[];
    /**
     * Filtra países por região.
     */
    filterByRegion(countries: ICountry[], region: Region): ICountry[];
}
//# sourceMappingURL=countryLogic.d.ts.map