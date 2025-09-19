import { Router } from "express";
import { generateInitialscore } from "../services/generateIntitialScore";
import { nlpInitialScore } from "../services/nlpInitialScore";

export const routes = Router();

routes.post("/initialscore", generateInitialscore);
routes.post("/nlp-initialscore", nlpInitialScore);
