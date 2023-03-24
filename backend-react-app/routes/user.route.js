// creating express

const express = require("express");
const userApi = express.Router();

// body parser middleware
userApi.use(express.json());

const {
  getUserById,
  deleteUserById,
  getAllUsers,
  registerUser,
  updateUserById,
} = require("../controllers/user.controller");

userApi.get("/user/:id", getUserById);
userApi.post("/register", registerUser);
userApi.put("/update/user/:id", updateUserById);
userApi.delete("/delete/user/:id", deleteUserById);
userApi.get("/users", getAllUsers);

module.exports = userApi;
