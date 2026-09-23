import  * as ClientesController from '../controller/ClientesController.js';
import {Router} from 'express';

const router = Router();

router.get("/",ClientesController.ListarCliente);
router.get("/:id",ClientesController.ListarClienteId);
router.post("/",ClientesController.RegistroCliente);
router.put("/:id",ClientesController.AtualizarCliente);
router.delete("/:id",ClientesController.DeletarCliente);

export default router;