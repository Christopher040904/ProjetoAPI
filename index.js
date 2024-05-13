//importando ad configurações do arquivo dotenv
require("dotenv").config();

/*
Vamos importar as bibliotecas(dependencia) do servidor express,
banco de dados mysql, segurança de requisições com helmet,
informações sobre as requisições com o morgan e outras bibliotecas
 */
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
//importar a rota de acesso aos endpoints do usuário
const router = require("./routes/usuario")

//vamos criar uma constante para instanciar o servidor express
//isso permite ativar o servidor
const app = express();
//ativar o helmet
app.use(helmet());
//ativar o morgan com informações completas. Opção combined
app.use(morgan("combined"))
//ativar a manipulação de dados em formato JSON
app.use(express.json())

//ativar as rotas do usuário
app.use("/api/v1/usuario",router);

//aplicar a porta de comunicação em 5051
app.listen(process.env.HOST_PORT,()=>console.log("Servidor online em "+process.env.HOST_API+":"+process.env.HOST_PORT));