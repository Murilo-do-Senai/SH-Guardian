import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.json({ ok: true, api: "SH Guardian API" }));


export default app;