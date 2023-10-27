const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const serviceRoutes = require("./routes/service");
const categoryRoutes = require("./routes/category");
const servicePriceOption = require("./routes/servicePriceOption");

const { requireAuth } = require("./middleware/auth");

const app = express();

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoDB connection error"));
app.use(cors());

app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send("the server is running");
});
// Routes
app.use("/auth", authRoutes);
app.use("/categories", requireAuth, categoryRoutes);

app.use("/service", requireAuth, serviceRoutes);
app.use("/servicePriceOption", requireAuth, servicePriceOption);

app.listen(config.port, () => {
  console.log(`server started on port ${config.port}`);
});
