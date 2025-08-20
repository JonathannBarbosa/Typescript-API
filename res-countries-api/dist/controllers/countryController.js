"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const countryService_1 = require("../services/countryService");
const countryService = new countryService_1.CountryService();
class CountryController {
    async list(req, res) {
        const { name, region } = req.query;
        try {
            let countries;
            if (name) {
                countries = await countryService.getByName(name);
            }
            else if (region) {
                countries = await countryService.getByRegion(region);
            }
            else {
                countries = await countryService.getAll();
            }
            res.json(countries);
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao buscar países", error });
        }
    }
}
exports.CountryController = CountryController;
//# sourceMappingURL=countryController.js.map