import express from "express";
import { generateInitialscore } from "./services/generateIntitialScore";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/initialscore", generateInitialscore);

app.listen(PORT, () => console.log("server is running on " + PORT));
