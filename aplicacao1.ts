import { Cargo } from "./src/model/cargo";
import { Funcionario } from "./src/model/funcionario";

const cargoAtendente = new Cargo("atendente");
const atendente = new Funcionario(1500, cargoAtendente, "054.952.004-28", "Antônia Serafina", "(88) 99986-4829");

const cargoPatrao = new Cargo("gerente");
const gerente = new Funcionario(3000, cargoPatrao, "894.654.789-59", "José Maria", "(88) 99986-7832");

console.log(atendente);
console.log(gerente);