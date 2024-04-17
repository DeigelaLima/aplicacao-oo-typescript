"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
var conta_1 = require("./conta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, limite) {
        var _this = _super.call(this, numero) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        var saldoDisponivel = this.saldo + this.limite;
        if (valor > 0 && saldoDisponivel >= valor) {
            // Desuz o valor do saldo atual usando o método set
            this.saldo -= valor;
            // Adiciona o valor ao saldo da conta de destino usando o método set
            contaDestino.saldo += valor;
            console.log("Transfer\u00EAncia de R".concat(valor, " realizada com sucesso."));
        }
        else {
            console.log("Transferência não realizada. Saldo insuficiente.");
        }
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        return this.saldo - this.limite;
    };
    return ContaCorrente;
}(conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
