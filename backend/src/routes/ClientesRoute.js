import  * as ClientesController from '../controller/ClientesController.js';
import {Router} from 'express';

const router = Router();

router.get("/",ClientesController.ListarCliente);
router.get("/:id",ClientesController.ListarClienteId);
router.post("/reg",ClientesController.RegistroCliente);
router.put("/up-:id",ClientesController.AtualizarCliente);
router.delete("/del-:id",ClientesController.DeletarCliente);

router.post("/ad_fone:id",ClientesController.RegistroTelefone)
router.put("/up_fone:id",ClientesController.AtualizarTelefone)
router.delete("/del_fone:id",ClientesController.DeletarTelefone)

export default router;