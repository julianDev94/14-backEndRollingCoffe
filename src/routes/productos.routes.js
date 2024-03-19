import { Router } from "express";
import { crearProducto, listaProductos, obtenerProductoID } from "../controllers/productos.controllers.js";

const router = Router();
router.route('/productos').get(listaProductos).post(crearProducto);
router.route('/producto/:id').get(obtenerProductoID)
export default router;
