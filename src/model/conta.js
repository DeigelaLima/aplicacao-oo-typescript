"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this._movimentos = []; // Array para armazenar movimentos
        this._numero = numero;
        this._saldo = 0;
    }
    Conta.prototype.depositar = function (valor) {
        // const credito = new Credito(valor);
        this._saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        }
        else {
            console.log("Seu saldo é insuficiente!");
        }
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
