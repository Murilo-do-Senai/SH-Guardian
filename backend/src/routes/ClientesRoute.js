import  * as ClientesController from '../controller/ClientesController.js';
import {Router} from 'express';

const router = Router();

router.get("/",ClientesController.ListarCliente);
router.get("/:id",ClientesController.ListarClienteId);
router.post("/",ClientesController.RegistroCliente);
router.put("/:id",ClientesController.AtualizarCliente);
router.delete("/:id",ClientesController.DeletarCliente);
router.post("/login",ClientesController.LoginCliente);
/////////////////////////////////////////////////////////////////////////////////////////////
router.post("/fone/:id",ClientesController.RegistroTelefone)
router.put("/fone/:id_cliente/:id_telefone",ClientesController.AtualizarTelefone)
router.delete("/fone/:id_cliente/:id_telefone",ClientesController.DeletarTelefone)
/////////////////////////////////////////////////////////////////////////////////////////////
router.post("/car/:id",ClientesController.RegistroCartao)
router.put("/car/:id_cliente/:id_cartao",ClientesController.AtualizarCartao)
router.delete("/car/:id_cliente/:id_cartao",ClientesController.DeletarCartao)

export default router;