"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryService_1 = require("./services/countryService");
const countryLogic_1 = require("./services/countryLogic");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
async function main() {
    const countryService = new countryService_1.CountryService();
    const countryLogic = new countryLogic_1.CountryLogic();
    // Buscar todos os países
    const countries = await countryService.getAll();
    // Exemplo 1: pesquisar por nome
    const searchResult = countryLogic.searchByName(countries, "bra");
    console.log("Pesquisa por 'bra':", searchResult.map(c => c.name.common));
    // Exemplo 2: filtrar por região
    const regionResult = countryLogic.filterByRegion(countries, "Europe");
    console.log("Países da Europa:", regionResult.map(c => c.name.common));
}
main();
//# sourceMappingURL=index.js.map