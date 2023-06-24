import express from "express";
import fs from "fs";

const app = express();
const port = 4100;

app.use(express.json());

// Middleware para permitir todas as origens, (estava dando erro de Cross Origin Sharing)
//esse codigo n é recomendado pois permite qq requisição
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.delete("/db/delete-movie/:key", (req, res) => {
  const key = req.params.key;
  const filePath = "data.json";

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      res.status(500).send("Erro ao excluir o objeto JSON");
      return;
    }

    let jsonArray = [];
    try {
      jsonArray = JSON.parse(data);
    } catch (err) {
      console.error("Erro ao fazer o parse do arquivo JSON:", err);
      res.status(500).send("Erro ao excluir o objeto JSON");
      return;
    }

    const newArray = jsonArray.filter((obj) => obj.id != key);
    const updatedArrayMovies = JSON.stringify(newArray, null, 2);

    fs.writeFileSync(filePath, updatedArrayMovies, (err) => {
      if (err) {
        console.error("Erro ao excluir o objeto JSON:", err);
        res.status(500).send("Erro ao excluir o objeto JSON");
      } else {
        console.log("Objeto JSON excluído com sucesso.");
        res.status(200).send("Objeto JSON excluído com sucesso.");
      }
    });
  });
});

app.post("/db/save-movie", (req, res) => {
  const objectData = req.body;
  const filePath = "data.json";

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      res.status(500).send("Erro ao salvar o objeto JSON");
      return;
    }

    let modifiedData = data.trim();

    let jsonArray = [];
    if (modifiedData.length > 0) {
      try {
        jsonArray = JSON.parse(modifiedData);
      } catch (error) {
        console.error("Erro ao fazer o parse do arquivo JSON:", error);
        res.status(500).send("Erro ao salvar o objeto JSON");
        return;
      }
    }

    const verifyExistingObject = jsonArray.find(
      (obj) => obj.id == objectData.id
    );
    if (verifyExistingObject) {
      console.log("Filme ja favoritado");
      return;
    }

    jsonArray.push(objectData);
    modifiedData = JSON.stringify(jsonArray, null, 2);

    fs.writeFile(filePath, modifiedData, (err) => {
      if (err) {
        console.error("Erro ao salvar o objeto JSON:", err);
        res.status(500).send("Erro ao salvar o objeto JSON");
      } else {
        console.log("Objeto JSON salvo com sucesso.");
        res.status(200).send("Objeto JSON salvo com sucesso.");
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
