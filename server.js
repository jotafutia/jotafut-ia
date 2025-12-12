import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes.js";
import "./src/db/database.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => res.send("JotaFut IA rodando 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta", PORT));
