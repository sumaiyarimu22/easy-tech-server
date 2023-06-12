const express = require("express");
const {
  getALLProduct,
  postProduct,
} = require("../controllers/projectController");

//router
const router = express.Router();

//routes
router.get("/", getALLProduct);

//post
router.post("/", postProduct);

module.exports = router;
