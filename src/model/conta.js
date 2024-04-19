"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var credito_1 = require("./credito");
var debito_1 = require("./debito");
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this._numero = numero;
        this._creditos = [];
        this._debitos = [];
    }
    Conta.prototype.calcularSaldo = function () {
        var saldoFinal = 0;
        for (var _i = 0, _a = this._creditos; _i < _a.length; _i++) {
            var credito = _a[_i];
            saldoFinal += credito.valor;
        }
        for (var _b = 0, _c = this._debitos; _b < _c.length; _b++) {
            var debito = _c[_b];
            saldoFinal -= debito.valor;
        }
        return saldoFinal;
    };
    Conta.prototype.depositar = function (valor) {
        var credito = new credito_1.Credito(valor, new Date());
        this._creditos.push(credito);
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.calcularSaldo()) {
            var debito = new debito_1.Debito(valor, new Date());
            this._debitos.push(debito);
        }
    };
    return Conta;
}());
exports.Conta = Conta;
