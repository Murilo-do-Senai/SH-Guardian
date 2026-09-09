import app from "./src/app.js";
import dotenv from "dotenv";
import mysql from "mysql2/promise"

const conexao = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:Number(process.env.DB_PORT || 3306),
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

// dotenv.config();
dotenv.config({ silent: true });

const Porta = process.env.Porta || 5000;

app.listen(Porta,()=>{
    console.log(`Servidor rodando na porta ${Porta}`)
});