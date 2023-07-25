const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel")

const Author = sequelize.define(
  "author",
  {
    author_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },
    profile_pic: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

Author.belongsTo(User);

sequelize
  // .sync({ alter: true })
  .sync()
  .then(() => {
    console.log("Author table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Author;
