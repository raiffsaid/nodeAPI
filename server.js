const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


//Iniciando o app
const app = express();
//Permitir que o express envie informações no formato JSON
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
requireDir("./src/models");



//Rotas
//Recebe qualquer tipo de requisição
app.use("/api", require("./src/routes"));


app.listen(3000);





