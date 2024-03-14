import { Router } from "express";
import { listaProductos } from "../controllers/productos.controllers.js";

const router = Router();
router.route('/productos').get(listaProductos);

export default router;
