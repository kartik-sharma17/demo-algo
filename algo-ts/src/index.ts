import express from "express";
import { routes } from "./routes/index.ts";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v2/employee", routes);

app.listen(PORT, () => console.log("server is running on " + PORT));
