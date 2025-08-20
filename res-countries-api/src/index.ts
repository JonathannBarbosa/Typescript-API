import { CountryService } from "./services/countryService";
import { CountryLogic } from "./services/countryLogic";
import { Region } from "./interfaces/country";


import express from "express";
import router from "./routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


async function main() {
  const countryService = new CountryService();
  const countryLogic = new CountryLogic();

  // Buscar todos os países
  const countries = await countryService.getAll();

  // Exemplo 1: pesquisar por nome
  const searchResult = countryLogic.searchByName(countries, "bra");
  console.log("Pesquisa por 'bra':", searchResult.map(c => c.name.common));

  // Exemplo 2: filtrar por região
  const regionResult = countryLogic.filterByRegion(countries, "Europe" as Region);
  console.log("Países da Europa:", regionResult.map(c => c.name.common));
}

main();
