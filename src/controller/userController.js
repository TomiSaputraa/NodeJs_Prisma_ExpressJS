const userModel = require("../models/userModel");

// Create
exports.createUser = async (req, res) => {
  try {
    const data = await userModel.createUser(req.body);
    res.json({
      message: "succes create data",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "error post data",
      error: error.message,
    });
  }
};

// read
exports.getAllUsers = async (req, res) => {
  try {
    const data = await userModel.getAllUser();
    res.json({
      message: "succes get data",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get data",
      error: error.message,
    });
  }
};

// read by id
exports.getUserById = async (req, res) => {
  try {
    const idUser = parseInt(req.params.id); // untuk prisma id harus di parse dulu kalau tidak akan di anggap string
    const data = await userModel.getUserById(idUser);
    res.json({
      messsage: "succes get user by id",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get data",
      error: error.message,
    });
  }
};

// update
exports.updateUser = async (req, res) => {
  try {
    const dataUser = req.body;
    const idUser = parseInt(req.params.id); //parse dahulu
    const data = await userModel.updateUser(dataUser, idUser);
    res.json({
      message: "succes update data",
      data: dataUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get data",
      error: error.message,
    });
  }
};

// delete
exports.deletUser = async (req, res) => {
  try {
    const idUser = parseInt(req.params.id);
    const data = await userModel.deleteUser(idUser);
    res.json({
      message: "succes delete data",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get data",
      error: error.message,
    });
  }
};
