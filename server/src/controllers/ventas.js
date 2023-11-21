const Venta = require('../models/Venta');

const getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.status(200).json({
      ok: true,
      ventas
    });
  } catch (err) {
    res.status(404).json({
      ok: false,
      msg: err.message
    })
  }
};

const postVenta = async (req, res) => {
  const venta = new Venta(req.body);
  try {
    const ventaGuardado = await venta.save();
    res.status(201).json({
      ok: true,
      ventaGuardado,
      msg: 'Venta creado con exito'
    });
  } catch (err) {
    res.status(400).json({
      ok: false,
      msg: err.message
    })
  }
};

const putVenta = async (req, res) => {
  const ventaId = req.params.id;
  try {
    const ventaExist = await Venta.findById(ventaId);
    if (!ventaExist) {
      return res.status(404).json({
        ok: false,
        msg: 'Venta no existe',
      });
    }
    const ventaUpdate = await Venta.findByIdAndUpdate(ventaId, req.body, {
      new: true,
    });
    res.json({
      ok: true,
      venta: ventaUpdate,
      msg: 'Venta actualizado con exito'
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteVenta = async (req, res) => {
  const ventaId = req.params.id;
  try {
    const ventaExist = await Venta.findById(ventaId);
    if (!ventaExist) {
      return res.status(404).json({
        ok: false,
        msg: 'venta no existe',
      });
    }
    await Venta.findByIdAndDelete(ventaId);

    res.json({
      ok: true,
      msg: 'Venta eliminado con exito'
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getVentas,
  postVenta,
  putVenta,
  deleteVenta
}