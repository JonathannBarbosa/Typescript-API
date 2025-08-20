import { Router } from "express";
import { CountryController } from "./controllers/countryController";

const router = Router();
const countryController = new CountryController();

router.get("/countries", (req, res) => countryController.list(req, res));

export default router;
