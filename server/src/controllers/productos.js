const Producto = require('../models/Producto')

const getproductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({
      ok: true,
      productos
    });
  } catch (err) {
    res.status(404).json({
      ok: false,
      msg: err.message
    })
  }
};

const getProducto = async (req, res) => {
  const id = req.params.id
  try {
    const producto = await Producto.findById(id);
    res.status(200).json({
      ok: true,
      producto
    });
  } catch (err) {
    res.status(404).json({
      ok: false,
      msg: err.message
    })
  }
};

const postProducto = async (req, res) => {
  const producto = new Producto(req.body);
  try {
    const productoGuardado = await producto.save();
    res.status(201).json({
      ok: true,
      productoGuardado,
      msg: 'Producto creado con exito'
    });
  } catch (err) {
    res.status(400).json({
      ok: false,
      msg: err.message
    })
  }
};

const putProducto= async (req, res) => {
  const productoId = req.params.id;
  try {
    const productoExist = await Producto.findById(productoId);
    if (!productoExist) {
      return res.status(404).json({
        ok: false,
        msg: 'Producto no existe',
      });
    }
    const productoUpdate = await Producto.findByIdAndUpdate(productoId, req.body, {
      new: true,
    });
    res.json({
      ok: true,
      producto: productoUpdate,
      msg: 'Producto actualizado con exito'
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProducto = async (req, res) => {
  const productoId = req.params.id;
  try {
    const productoExist = await Producto.findById(productoId);
    if (!productoExist) {
      return res.status(404).json({
        ok: false,
        msg: 'producto no existe',
      });
    }
    await Producto.findByIdAndDelete(productoId);

    res.json({
      ok: true,
      msg: 'Producto eliminado con exito'
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getproductos,
  postProducto,
  putProducto,
  deleteProducto,
  getProducto
}