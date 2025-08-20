import { ICountry } from "../interfaces/country";
export declare class CountryService {
    getAll(): Promise<ICountry[]>;
    getByName(name: string): Promise<ICountry[]>;
    getByRegion(region: string): Promise<ICountry[]>;
}
//# sourceMappingURL=countryService.d.ts.map