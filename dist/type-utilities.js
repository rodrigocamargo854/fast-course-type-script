"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//readOnly, para preservar a imutabildiade
var todo = {
    title: "Assistir Dark novamente",
    description: "Reelembrar todos os detalhes",
    isComplete: false,
};
console.log(todo);
// todo.isComplete = true // não podemos alterar diretamente por causa do readyonly
//para que possamos entao atualizar o objeto todo devemos criar uma função que permita reecriar o objeto com os novos valores setados
function updateTodo(todo, fieldsTypeUpdate) {
    return __assign(__assign({}, todo), fieldsTypeUpdate);
}
//como na linha abaixo queremos fazer o update somente do IsComplete, utilizamos o Partial
//Partial deixa tudo opcional porêm ainda permite que os tipos permaneceçam
var todo2 = updateTodo(todo, { isComplete: false });
console.log(todo2);
var todo3 = {
    title: 'Ghost of Tshshima',
    description: 'New game'
};
//somente buscara os tipos q nao estao omitindo
var todo4 = {
    isComplete: true
};
