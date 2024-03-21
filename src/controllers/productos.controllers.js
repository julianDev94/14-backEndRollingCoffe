import Producto from "../database/model/producto.js";

export const listaProductos = async (req, res) => {
  try {
    // console.log("desde listar productos");
    // res.send("enviar lista de productos...");
    //pedir a la bbdd la lista de la colecctions de productos
    //el find() es una query de mongoose para traer todos los datos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje:
        "No se pudo completar la operacion. Por favor vuelva a intentarlo en otro momento",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    //verificar datos del body
    console.log(req.body);
    //validar datos
    //pedir a la bbdd crear producto
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    //enviar el codigo status 201
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
    // res.send('desde Crear producto');
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo procesar la solicitud de crear producto",
    });
  }
};

export const obtenerProductoID = async (req,res) =>{
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    //si encontre el producto
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se encontro el producto solicitado"
    })
  }
}
