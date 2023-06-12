require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");

const app = express();

// middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

// route
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to easy Tech server!" });
});

const port = process.env.PORT || 6060;
const uri = process.env.MONGO_URI;

//mongoose
mongoose.connect(uri, { useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`server running on port: ${port}`);
  });
});
