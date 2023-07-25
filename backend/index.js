const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");
require("dotenv").config();
require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/Uploads/Images", express.static("./Uploads/Images"));

//
app.use("/auth", authRouter);
app.use("/api", postRouter);

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});
