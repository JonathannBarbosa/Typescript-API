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

// Tipagem forte para regiões possíveis
export type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
