const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Article = sequelize.define("article", {
  article_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
  },
  cover_img: {
    type: DataTypes.STRING,
  },
  poster: {
    type: DataTypes.STRING,
  },
  isNews: {
    type: DataTypes.BOOLEAN,
  },
  isEvent: {
    type: DataTypes.BOOLEAN,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
  },
});

sequelize
  // .sync({ alter: true })
  .sync()
  .then(() => {
    console.log("Article table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Article;
