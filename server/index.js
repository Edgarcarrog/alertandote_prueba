const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

//Crear el servidor
const app = express();

//Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 4000;

//app.use(cors());
app.use(express.json({ extended: true }));

//importar rutas
const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
