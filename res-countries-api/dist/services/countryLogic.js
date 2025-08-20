"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryLogic = void 0;
class CountryLogic {
    /**
     * Pesquisa países pelo nome
     */
    searchByName(countries, term) {
        const lowerTerm = term.toLowerCase();
        return countries.filter(c => c.name.common.toLowerCase().includes(lowerTerm) ||
            c.name.official.toLowerCase().includes(lowerTerm));
    }
    /**
     * Filtra países por região.
     */
    filterByRegion(countries, region) {
        return countries.filter(c => c.region === region);
    }
}
exports.CountryLogic = CountryLogic;
//# sourceMappingURL=countryLogic.js.map