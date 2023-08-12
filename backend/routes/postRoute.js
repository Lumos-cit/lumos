const express = require("express");
const router = express.Router();
const {
  addArticle,
  deleteArticle,
  findOneArticle,
  getArticles,
  search,
  updateArticle,
} = require("../controller/article/articleController");

// IMAGE UPLOAD

// router.post("/img-upload", upload, sendUploadedFileUrl);

router.get("/articles", getArticles);

router.get("/article/:id", findOneArticle);

router.get("/article/search", search);

router.post("/article", addArticle);

router.put("/article", updateArticle);

router.delete("/article", deleteArticle);

module.exports = router;
