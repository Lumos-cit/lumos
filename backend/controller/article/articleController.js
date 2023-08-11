const Article = require("../../model/articleModel");
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");

const addArticle = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    content: data.content,
    cover_img: data.cover_img,
    poster: data.poster,
    isNews: data.isNews,
    isEvent: data.isEvent,
    isFeatured: data.isFeatured,
  };

  try {
    const article = await Article.create(info);
    res.send(article);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the article");
  }
};

const updateArticle = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    content: data.content,
    cover_img: data.cover_img,
    poster: data.poster,
    isNews: data.isNews,
    isEvent: data.isEvent,
    isFeatured: data.isFeatured,
  };

  try {
    const article = await Article.update(info, {
      where: { id: req.params.id },
    });
    res.send(article);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to update the product");
  }
};

const getArticles = async (req, res) => {
  const match = {};
  const sort = {};

  // if (req.query.bestSeller) {
  //   match.bestSeller = req.query.bestSeller === "true";
  // }

  // if (req.query.Type) {
  //   match.Type = req.query.Type;
  // }

  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const article = await Article.findAll({
      where: match,
      offset: offset,
      limit: limit,
    });

    const meta = {
      total: await Article.count({
        where: match,
        offset: offset,
        limit: limit,
      }),
      limit: limit,
      offset: offset,
      page: offset / limit + 1,
    };

    const output = {
      data: article,
      meta: meta,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to get the articles");
  }
};

const findOneArticle = async (req, res) => {
  try {
    const article = await Article.findOne({
      where: {
        article_id: Number(req.params.id),
      },
    });
    if (article) res.send(article);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the product");
  }
};

const deleteArticle = async (req, res) => {
  Article.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log("Successfully deleted record.");
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
    });
};

const search = async (req, res) => {
  const match = req.query.s;
  let article = [];
  if (match) {
    try {
      article = await Article.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + match + "%",
              },
            },
          ],
        },
        limit: 10,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json("Error");
    }
  }
  res.send(article);
};

module.exports = {
  addArticle,
  updateArticle,
  getArticles,
  findOneArticle,
  deleteArticle,
  search,
};
