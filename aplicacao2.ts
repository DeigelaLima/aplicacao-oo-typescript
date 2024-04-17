import { Cliente } from "./src/model/cliente";
import { Endereco } from "./src/model/endereco";


const enderecoP =  new Endereco("63.899-78", "Rua joão de Machado", "222", "casa", "Juazeiro", "Ce");
const enderecoS =  new Endereco("63.123-43", "Rua Maria da Cruz", "342", "casa", "Quixadá", "Ce");
const enderecoT =  new Endereco("63.543-12", "Rua Felipe de Felicidade", "1890", "casa", "Fortaleza", "Ce");

const cliente = new Cliente("849.789.123-97", "Maria Apareceu", "(88) 9543-2354", true, [enderecoP, enderecoS, enderecoT]);

console.log(cliente.listarEnderecos());