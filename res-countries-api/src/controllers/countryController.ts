import { Request, Response } from "express";
import { CountryService } from "../services/countryService";

const countryService = new CountryService();

export class CountryController {
  async list(req: Request, res: Response): Promise<void> {
    const { name, region } = req.query;

    try {
      let countries;

      if (name) {
        countries = await countryService.getByName(name as string);
      } else if (region) {
        countries = await countryService.getByRegion(region as string);
      } else {
        countries = await countryService.getAll();
      }

      res.json(countries);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar países", error });
    }
  }
}
