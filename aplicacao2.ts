import { Cliente } from "./src/model/cliente";
import { Endereco } from "./src/model/endereco";


const enderecoP =  new Endereco("63.899-78", "Rua joão de Machado", "222", "casa", "Juazeiro", "CE");
const enderecoS =  new Endereco("63.123-43", "Rua Maria da Cruz", "342", "casa", "Quixadá", "CE");
const enderecoT =  new Endereco("63.543-12", "Rua Felipe de Felicidade", "1890", "casa", "Fortaleza", "CE");

const cliente = new Cliente("849.789.123-97", "Maria Apareceu", "(88) 9543-2354", true, []);

cliente.adicionarEndereco(enderecoP);
cliente.adicionarEndereco(enderecoS);
cliente.adicionarEndereco(enderecoT);

console.log(cliente.listarEnderecos());