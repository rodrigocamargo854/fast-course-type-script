"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    plataform: ["Ps4", "Ps3"],
    getSimilars: function (title) {
        console.log("Similar Game");
    },
};
tlou.getSimilars ? tlou.title : undefined;
var theLeftBehind = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    plataform: ["Ps4", "Ps3"],
    originalGame: tlou,
    newContent: ["ps4", "ps3"],
};
console.log(theLeftBehind.description);
//implmentando uma classe baseada em uma interface
//a classe necessita implementar tudo oque há na interface Game
var CrateGame = /** @class */ (function () {
    function CrateGame(a, b, c, d) {
        this.title = a;
        this.description = b;
        this.genre = c;
        this.plataform = d;
    }
    return CrateGame;
}());
