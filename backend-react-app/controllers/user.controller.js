const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/user.model");

// GET USER BY USER ID
const getUserById = expressAsyncHandler(async (req, res) => {
  let userId = req.params.id;
  const user = await User.findOne({
    where: {
      id: userId,
      status: true,
    },
  });
  if (user !== undefined || user !== null) {
    res.status(200).send({ Msg: "Found user!", payload: user });
  } else {
    res.status(404).send({ Msg: "Oops! User not found!" });
  }
});

// GET ALL USERS
const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.findAll({
    where: {
      status: true,
    },
  });
  if (users.length > 0) {
    res.status(200).send({ Msg: "All users!", payload: users });
  } else {
    res.status(200).send({ Msg: "No users exist!" });
  }
});

// UPDATE USER
const updateUserById = expressAsyncHandler(async (req, res) => {
  let userId = req.params.id;
  let { username, email, dob } = req.body;
  let update = await User.update(
    { username: username, email: email, dob: dob },
    {
      where: { id: userId, status: true },
    }
  );
  if (update > 0)
    res.status(200).send({ Msg: `User with ID: ${userId} updated!` });
  else res.send("User not updated!");
});

// DELETE USER BY ID
const deleteUserById = expressAsyncHandler(async (req, res) => {
  let userId = req.params.id;

  let deleteUser = await User.update(
    { status: false },
    {
      where: {
        id: userId,
      },
    }
  );
  if (deleteUser > 0) {
    res.send({ Msg: `User with ID: ${userId} deleted!` });
  } else res.send({ Msg: `User with ID: ${userId} not found!` });
});

// POST/ REGISTER USER
const registerUser = expressAsyncHandler(async (req, res) => {
  let user = req.body;
  console.log(user);
  let post = await User.create(user);
  // console.log(post.dataValues);

  if (post.dataValues !== null) {
    res.send({ Msg: "User created!", payload: user });
  } else res.status(201).send({ Msg: "User not created!" });
});

module.exports = {
  deleteUserById,
  getAllUsers,
  registerUser,
  updateUserById,
  getUserById,
};
