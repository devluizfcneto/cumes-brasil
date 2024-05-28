import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import routes from "./routes/routes";
import "reflect-metadata";
import swaggerDocument from "../swagger_output.json";
import { AppDataSource } from "../Infrastructure/config/db";
import { loadData } from "../Infrastructure/sql_scripts/initialLoad";
import { Via } from "../Domain/entities/Via";
import path from "path";

dotenv.config();
const cors = require("cors");
const app = express();
const isDevelopment = process.env.NODE_ENV === "development";
const corsOptions = {
    origin: isDevelopment
      ? "http://localhost:9000"
      : "http://192.168.1.147:9000"
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 4020;

// Servir arquivos estáticos da pasta assets
const assetsPath = path.join(__dirname, "../../assets");
console.log("Servidor está servindo arquivos estáticos no diretório:", assetsPath);
app.use("/assets", express.static(assetsPath));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/api', routes);

AppDataSource.initialize().then(async () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso");

    const viaRepository = AppDataSource.getRepository(Via);
    const count = await viaRepository.count();
    if (count === 0) {
        console.log("Nenhum registro encontrado na tabela Via, iniciando carga de dados...");
        loadData().then(() => console.log("Carga inicial realizada com sucesso"))
          .catch(e => console.log("Erro na carga de dados:", e));
    } else {
        console.log("Registros já existentes na tabela Via, pulando a carga de dados.");
    }
}).catch(error => console.log("Erro ao conectar com o banco de dados:", error));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Swagger documentation available at http://localhost:4020/api-docs");
    console.log("Server is running in", process.env.NODE_ENV, "mode");
    console.log("The cors origin is", corsOptions.origin);
    console.log(process.cwd());
});
