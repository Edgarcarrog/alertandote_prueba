
const Movie = require("../models/Movie");

exports.getData = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ chronology: 1 });
    res.status(200).json({ movies, msg: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
