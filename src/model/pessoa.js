"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (value) { this._nome = value; },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
