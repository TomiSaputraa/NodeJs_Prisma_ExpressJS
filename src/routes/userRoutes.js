const express = require("express");
const router = express.Router();
const usersController = require("../controller/userController");

// CREATE
router.post("/", usersController.createUser);

// READ /GET all users
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);

// UPDATE
router.put("/:id", usersController.updateUser);

// DELETE
router.delete("/:id", usersController.deletUser);

module.exports = router;
