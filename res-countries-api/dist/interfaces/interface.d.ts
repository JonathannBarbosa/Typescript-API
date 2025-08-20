export interface Country {
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
//# sourceMappingURL=interface.d.ts.map