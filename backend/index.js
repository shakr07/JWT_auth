const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const Auth=require('./Routes/auth')
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  //definig the  routes
app.use(cookieParser());

app.use("/",Auth);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
