const { default: app } = await import("./src/app.js");
import dotenv from "dotenv";


// dotenv.config();
dotenv.config({ silent: true });

const Porta = process.env.Porta || 5000;

app.listen(Porta,()=>{
    console.log(`Servidor rodando na porta ${Porta}`)
});