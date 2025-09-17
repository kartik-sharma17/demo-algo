import express from "express";
import { generateInitialscore } from "./services/generateIntitialScore";
import { nlpInitialScore } from "./services/nlpInitialScore";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/initialscore", generateInitialscore);

app.post("/nlp-initialscore", nlpInitialScore);

app.listen(PORT, () => console.log("server is running on " + PORT));
