"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, local, age, isLogged) {
        if (isLogged === void 0) { isLogged = false; }
        this.name = name;
        this.local = local;
        this.age = age;
        this.isLogged = isLogged;
    }
    Account.prototype.isLoggedin = function () {
        if (this.name && this.isLogged) {
            return this.name + " logged in";
        }
        return this.name + " loged out";
    };
    return Account;
}());
exports.Account = Account;
