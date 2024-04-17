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
exports.Debito = void 0;
var conta_1 = require("./conta");
var Debito = /** @class */ (function (_super) {
    __extends(Debito, _super);
    function Debito(_numero, valor, data) {
        var _this = _super.call(this, _numero) || this;
        _this._valor = valor;
        _this._data = data;
        return _this;
    }
    Object.defineProperty(Debito.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (valor) {
            this._valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Debito.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    return Debito;
}(conta_1.Conta));
exports.Debito = Debito;
