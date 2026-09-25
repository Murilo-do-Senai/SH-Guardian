import  * as ClientesController from '../controller/ClientesController.js';
import {Router} from 'express';

const router = Router();

router.get("/",ClientesController.ListarCliente);
router.get("/:id",ClientesController.ListarClienteId);
router.post("/add",ClientesController.RegistroCliente);
router.put("/up/:id",ClientesController.AtualizarCliente);
router.delete("/del/:id",ClientesController.DeletarCliente);
/////////////////////////////////////////////////////////////////////////////////////////////
router.post("/ad_fone/:id",ClientesController.RegistroTelefone)
router.put("/up_fone/:id_cliente/:id_telefone",ClientesController.AtualizarTelefone)
router.delete("/del_fone/:id_cliente/:id_telefone",ClientesController.DeletarTelefone)
/////////////////////////////////////////////////////////////////////////////////////////////
router.post("/ad_car/:id",ClientesController.RegistroCartao)
router.put("/up_car/:id_cliente/:id_cartao",ClientesController.AtualizarCartao)
router.delete("/del_car/:id_cliente/:id_cartao",ClientesController.DeletarCartao)

export default router;