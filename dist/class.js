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
    Object.defineProperty(Account.prototype, "getLoginStatus", {
        //**********************/
        //getter and setter
        get: function () {
            console.log('-------LOGIN STATE-------');
            return this.isLogged;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setUserNAme", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
//classe apenas para modelo para outras classe, podemos extender mais nao podemos utilziar para ciração de novos users
var userAccountModel = /** @class */ (function () {
    function userAccountModel(abstractName) {
        this.abstractName = abstractName;
    }
    return userAccountModel;
}());
//**********************/
var user = new Account('Rodrigo', 'Brasil', 11, true);
console.log(user.isLoggedin());
console.log(user.getLoginStatus); //retorna o estado do login do usuario
console.log(user.setUserNAme = 'Willian'); //podemos setar (alterar) dados de uam variavel 
