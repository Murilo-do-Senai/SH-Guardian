import  * as MoveisController from '../controller/MoveisController.js';
import {Router} from 'express';

const router = Router();

router.get("/",MoveisController.ListarMovel);
router.get("/:id",MoveisController.ListarporID);
router.post("/",MoveisController.RegistroMovel);
router.put("/:id",MoveisController.AtualizarMovel);
router.delete("/:id",MoveisController.DeletarMovel);


export default router;