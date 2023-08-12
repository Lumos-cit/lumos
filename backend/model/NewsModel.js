const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const News = sequelize.define("news", {
  news_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT("long"),
  },
  author_name: {
    type: Sequelize.INTEGER,
  },
});

sequelize
  .sync({ alter: true })
  //   .sync()
  .then(() => {
    console.log("News table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create news table : ", error);
  });

module.exports = News;
