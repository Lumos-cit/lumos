const express = require("express");
const router = express.Router();
const {
  addProduct,
  upload,
  getCurrencies,
  findOneCurrency,
  updateProduct,
  deleteProduct,
  search,
  sendUploadedFileUrl,
} = require("../controller/currency/currencyController");

// IMAGE UPLOAD

router.post("/img-upload", upload, sendUploadedFileUrl);



module.exports = router;
