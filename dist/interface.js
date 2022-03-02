"use strict";
// export interface Game {
//   title: string; //optinal
//   description: string;
//   genre: string; // apenas leitura
//   plataform: string[];
//   getSimilars?: (title: string) => void;
// }
// const tlou: Game = {
//   title: "The Last of Us",
//   description: "The best game in the world",
//   genre: "Action",
//   plataform: ["Ps4", "Ps3"],
//   getSimilars: (title: string) => {
//     console.log(`Similar Game`);
//   },
// };
// tlou.getSimilars ? tlou.title : undefined;
// //Criando uma DLC para o game The las of us
// //extendendo interfaces
// interface DLC extends Game {
//   originalGame: Game;
//   newContent: string[];
// }
// const theLeftBehind: DLC = {
//   title: "The Last of Us",
//   description: "The best game in the world",
//   genre: "Action",
//   plataform: ["Ps4", "Ps3"],
//   originalGame: tlou,
//   newContent: ["ps4", "ps3"],
// };
// console.log(theLeftBehind.description);
// //implmentando uma classe baseada em uma interface
// //a classe necessita implementar tudo oque há na interface Game
// class CrateGame implements Game{
//   title: string; //optinal
//   description: string;
//   genre: string; // apenas leitura
//   plataform: string[];
//    constructor(a:string,b:string,c:string,d:string[]){
//      this.title = a;
//      this.description = b;
//      this.genre = c ;
//      this.plataform = d;
//    }  
// }
// //diferences between Types and Interfaces
// type GameT={
//   title:string
// }
// interface Games{
//   title:string
// }
// //intersection
// type GameCollectionT = Game & Games
// interface GameCollection extends Game,Games{}
// //implements
// class CreatedGame implemens Game{}
// interface CreatedGameT implemens Game{}
// //functions declarations
// type getSimilarS =(title:string) => void;
// interface getSimilarSt (title:string) => void;
// //tipos primitivos
// //types permite criar opç~oes para os tipos primitivos
// type IDT = string | number
// //interface não permite
// interface ITd {
//   a:string
// }
// //tuples declarations
// //types
// type Tuplet = [number, number];
// [1,2,3] as Tuplet
// //interfaces
// interface tuple {
//   0: number;
//   1: number;
// }
// // apenas uma declarção por escopo
// type JQueryT = { a:string}
// type JQueryT = { b:string}
// //interface permitem mesmo nome, havera o mergeamento das interfaces
// interface JQuery{
//   a:string
// }
// interface JQuery{
//   b:string
// }
// const $:  JQuery={
// a: 'bla',
// b:'foo'
// }
