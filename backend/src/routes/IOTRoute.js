import { Router } from "express";

import {
  receberLeitura,
  consultarEstado,
  controlarVentilador,
  ativarModoAutomatico
} from "../controller/SimuIOTController.js";

const router = Router();

router.post("/sensor", receberLeitura);
router.get("/status", consultarEstado);
router.post("/ventilador", controlarVentilador);
router.post("/automatico", ativarModoAutomatico);

export default router;