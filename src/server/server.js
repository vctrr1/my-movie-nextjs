import express from "express";
import fs from "fs";

const app = express();
const port = 4100;

app.use(express.json());

// Middleware para permitir todas as origens (para fins de exemplo)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/db/save-json", (req, res) => {
  const objectData = req.body;
  const jsonData = JSON.stringify(objectData, null, 2);

  fs.appendFile("data.json", jsonData + ",\n", (err) => {
    if (err) {
      console.error("Erro ao salvar o objeto JSON:", err);
      res.status(500).send("Erro ao salvar o objetoo JSON");
    } else {
      console.log("Objeto JSON salvo com sucesso.");
      res.status(200).send("Objeto JSON salvo com sucesso.");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
