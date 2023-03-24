// importing express module
const express = require("express");

// calling express function
const app = express();

// CONNECTING BUILD OF REACT APP WITH NODEJS WEB SERVER
const path = require("path");
app.use(express.static(path.join(__dirname, "../build")));

// calling config on dotenv package
require("dotenv").config();

// specifying port number
const PORT = 4000 || process.env.PORT;

// import database
const sequelize = require("./db/db.config");

// body parser
app.use(express.json());

// checking db connection
sequelize
  .authenticate()
  .then(() => console.log("DB connection success"))
  .catch((err) => console.log(err));

// user api
const userApi = require("./routes/user.route");
app.use("/user-api", userApi);



// listening on a port 
app.listen(PORT, console.log(`Server running @ ${PORT}!`));

// WRONG PATH MIDDLEWARE
app.use("*", (req, res) => {
  res.send({ Msg: "Wrong path!" }); 
});

// CATCHING ERROR MIDDLEWARE
app.use((err, req, res, next) => {
  res.send({ errMsg: err.message });
});
