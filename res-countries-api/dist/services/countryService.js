"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://restcountries.com/v3.1";
class CountryService {
    async getAll() {
        const response = await axios_1.default.get(`${BASE_URL}/all?fields=name,flags`);
        return response.data;
    }
    async getByName(name) {
        const response = await axios_1.default.get(`${BASE_URL}/name/${name}`);
        return response.data;
    }
    async getByRegion(region) {
        const response = await axios_1.default.get(`${BASE_URL}/region/${region}`);
        return response.data;
    }
}
exports.CountryService = CountryService;
//# sourceMappingURL=countryService.js.map