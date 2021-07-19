
const Movie = require("../models/Movie");

exports.getData = async (req, res) => {
  try {
    const data = await Movie.find({});
    res.status(200).json({ data, msg: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
