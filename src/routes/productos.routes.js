import { Router } from "express";
import { crearProducto, listaProductos } from "../controllers/productos.controllers.js";

const router = Router();
router.route('/productos').get(listaProductos).post(crearProducto);

export default router;
