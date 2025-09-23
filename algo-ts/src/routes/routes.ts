import { Router } from "express";
import { generateInitialscore } from "../services/generateIntitialScore";
import { nlpInitialScore } from "../services/nlpInitialScore";
import { feedbackScore } from "../services/feedbackScore";

export const routes = Router();

routes.post("/initialscore", generateInitialscore);
routes.post("/nlp-initialscore", nlpInitialScore);
routes.post("/feedbackscore", feedbackScore);
