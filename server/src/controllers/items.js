const Item = require('../models/Item');

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json({
      ok: true,
      items,
    });
  } catch (err) {
    console.log(err);
  }
};

const postItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    const itemGuardado = await item.save();
    res.json({
      ok: true,
      itemGuardado,
    });
  } catch (err) {
    console.log(err);
  }
};

const putItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const itemExist = await Item.findById(itemId);
    if (!itemExist) {
      return res.status(404).json({
        ok: false,
        msg: 'Item no existe',
      });
    }
    const itemUpdate = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.json({
      ok: true,
      item: itemUpdate,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const itemExist = await Item.findById(itemId);
    if (!itemExist) {
      return res.status(404).json({
        ok: false,
        msg: 'Item no existe',
      });
    }
    await Item.findByIdAndDelete(itemId);

    res.json({
      ok: true,
      msg: 'Item eliminado con exito'
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getItems,
  postItem,
  putItem,
  deleteItem,
};
