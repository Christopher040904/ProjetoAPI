//importar as configurações do arquivo env
require("dotenv").config();

//importar a biblioteca do mysql2
const mysql = require("mysql2");

//criar uma função para exportar a conexão
//com o banco de dados
const con = ()=>{
    return mysql.createConnection({
        host: process.env.HOST_API,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}
//estamos exportando a função con e passando com parenteses
//para q a função ja seja executada. Assim não será
//necessário instanciar e/ou ativar a função. Ela já irá ativada
module.exports = con();