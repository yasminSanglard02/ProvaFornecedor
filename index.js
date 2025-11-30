import express from 'express';
import fornecedorRouters from "./scr/routes/fornecedor.routes.js";

const app = express ();

app.use(express.json());
app.use(fornecedorRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});