import express from "express";
import cors from "cors";
import ClienteRoute from './routes/ClientesRoute.js';
import MoveisRoute from "./routes/MoveisRoute.js";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.json({ ok: true, api: "SH Guardian API" }));

app.use("/clientes",ClienteRoute);
app.use("/moveis",MoveisRoute);



export default app;