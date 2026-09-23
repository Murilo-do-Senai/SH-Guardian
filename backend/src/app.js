import express from "express";
import cors from "cors";
import ClienteRoute from './routes/ClientesRoute.js';

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.json({ ok: true, api: "SH Guardian API" }));

app.use("/clientes",ClienteRoute);


export default app;