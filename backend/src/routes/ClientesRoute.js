import  * as ClientesController from '../controller/ClientesController.js';
import {Router} from 'express';

const router = Router();

router.get("/",ClientesController.ListarCliente);
router.get("/:id",ClientesController.ListarClienteId);
router.post("/",ClientesController.RegistroCliente);
//router.put("/:id",ClientesController.atualizar);
//router.delete("/:id",ClientesController.deletar);

export default router;