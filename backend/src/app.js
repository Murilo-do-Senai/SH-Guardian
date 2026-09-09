import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.json({ ok: true, api: "Top Players API" }));


export default app;