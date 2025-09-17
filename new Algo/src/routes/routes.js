import { Router } from "express";
import { generateInitialscore } from "../service/index.js";


export const employeeV2 = Router();

employeeV2.post("/initialscore", generateInitialscore)