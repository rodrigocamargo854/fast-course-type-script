export interface Game {
  title: string; //optinal
  description: string;
  genre: string; // apenas leitura
  plataform: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  plataform: ["Ps4", "Ps3"],
  getSimilars: (title: string) => {
    console.log(`Similar Game`);
  },
};

tlou.getSimilars ? tlou.title : undefined;
//Criando uma DLC para o game The las of us
//extendendo interfaces

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const theLeftBehind: DLC = {
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

class CrateGame implements Game{
  title: string; //optinal
  description: string;
  genre: string; // apenas leitura
  plataform: string[];
   constructor(a:string,b:string,c:string,d:string[]){
     this.title = a;
     this.description = b;
     this.genre = c ;
     this.plataform = d;
   }  
}
