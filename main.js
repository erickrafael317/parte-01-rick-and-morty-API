import { buscarPersonagens } from "./api.js";

async function iniciarApp() {
    const dados = await buscarPersonagens();
    console.log("Dados recebidos da API:", dados);
    console.log("Lista de Personagens (results):", dados.results);
}

iniciarApp();