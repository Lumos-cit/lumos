const Currency = require("../../model/currencyModel");
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");

const addProduct = async (req, res) => {
  const data = req.body;
  let info = {
    Name: data.Name,
    Description: data.Description,
    Image: data.Image,
    Price: data.Price,
    Continent: data.Continent,
    Country: data.Country,
    Status: data.Status,
    Type: data.Type,
    bestSeller: data.bestSeller,
    Tags: data.Tags,
  };

  try {
    const currency = await Currency.create(info);
    res.send(currency);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the product");
  }
};

const updateProduct = async (req, res) => {
  const data = req.body;
  let info = {
    Name: data.Name,
    Description: data.Description,
    Image: req?.file?.path || data.Image,
    Price: data.Price,
    Continent: data.Continent,
    Country: data.Country,
    Status: data.Status,
    Type: data.Type,
    bestSeller: data.bestSeller,
    Tags: data.Tags,
  };

  try {
    const currency = await Currency.update(info, {
      where: { id: req.params.id },
    });
    res.send(currency);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the product");
  }
};

const getCurrencies = async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.bestSeller) {
    match.bestSeller = req.query.bestSeller === "true";
  }

  if (req.query.dealOftheDay) {
    match.dealOftheDay = req.query.dealOftheDay === "true";
  }

  if (req.query.Type) {
    match.Type = req.query.Type;
  }

  if (req.query.Country) {
    match.Country = req.query.Country;
  }

  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const currency = await Currency.findAll({
      where: match,
      offset: offset,
      limit: limit,
    });

    const meta = {
      total: await Currency.count({
        where: match,
        offset: offset,
        limit: limit,
      }),
      limit: limit,
      offset: offset,
      page: offset / limit + 1,
    };

    const output = {
      data: currency,
      meta: meta,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the product");
  }
};

const findOneCurrency = async (req, res) => {
  try {
    const currency = await Currency.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (currency) res.send(currency);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the product");
  }
};

const deleteProduct = async (req, res) => {
  Currency.destroy({
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
  let currency = [];
  if (match) {
    try {
      currency = await Currency.findAll({
        where: {
          [Op.or]: [
            {
              Name: {
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
  res.send(currency);
};

// Upload Image Controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "5mb" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files format to upload");
  },
}).single("Image");

const sendUploadedFileUrl = async (req, res) => {
  if (req?.file?.path) {
    res.send({
      url: req?.file?.path,
    });
  } else {
    res.status(400).json("Error");
  }
};

module.exports = {
  addProduct,
  upload,
  sendUploadedFileUrl,
  getCurrencies,
  findOneCurrency,
  updateProduct,
  deleteProduct,
  search,
};
