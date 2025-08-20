export interface ICountry {
    name: {
        common: string;
        official: string;
    };
    region: string;
    subregion?: string;
    capital?: string[];
    population: number;
    flags: {
        png: string;
        svg: string;
    };
}
export type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
//# sourceMappingURL=country.d.ts.map