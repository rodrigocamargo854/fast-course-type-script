"use strict";
//boolean
var isOpen;
isOpen = true;
//string
var message;
message = "foo " + (isOpen ? "open" : "closed");
//Number
var total;
total = 20;
total = 20.3;
//array(type[])
var items;
items = [1, 2, 3, 5, 4, 8, 7];
//generic types
var values;
values = [1, 2, 3, 4, 5, 6];
//tuple(type) [type, type, type]
var titles;
titles = [1, "foo", 3232];
var subTitles;
subTitles = [1, "foo", 3232, 1, "foo", 3232];
//enumm
var Colors;
(function (Colors) {
    Colors["white"] = "#ffff";
    Colors["black"] = "#0000";
})(Colors || (Colors = {}));
//any (not cool )
var coisa;
coisa = true;
coisa = [];
//void (retorno vazio)
function logger() {
    console.log("foo");
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: 'foo key'
};
//type inference
//em alguns casos não é necessário explicitar  os tipos por causa da inferÇencia de tipos
var message2 = 'mensagem definida';
window.addEventListener("click", function (e) {
    console.log(e.target);
});
