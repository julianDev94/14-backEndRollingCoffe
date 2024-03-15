import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
    //validar url imagen con regexp
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"],
  },
  descripcionAmplia: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 300,
  },
});

const Producto = mongoose.model('producto',productoSchema); //hace referencia a la coleccion de todos los productos en la bbdd

export default Producto;