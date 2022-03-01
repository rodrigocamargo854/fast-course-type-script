//boolean
let isOpen: boolean;
isOpen = true;

//string
let message: string;
message = `foo ${isOpen ? "open" : "closed"}`;

//Number
let total: Number;
total = 20;
total = 20.3;

//array(type[])
let items: number[];
items = [1, 2, 3, 5, 4, 8, 7];
//generic types
let values: Array<number>;
values = [1, 2, 3, 4, 5, 6];

//tuple(type) [type, type, type]
let titles: [number, string, number];
titles = [1, "foo", 3232];
let subTitles: [number, string, number, number, string, number];
subTitles = [1, "foo", 3232, 1, "foo", 3232];

//enumm
enum Colors {
  white = "#ffff",
  black = "#0000",
}

//any (not cool )
let coisa: any;
coisa = true;
coisa = [];

//void (retorno vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined
type variable = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart : object

cart = {
    key: 'foo key'
}

//type inference
//em alguns casos não é necessário explicitar  os tipos por causa da inferÇencia de tipos
let message2 = 'mensagem definida'
window.addEventListener("click",(e) => {
  console.log(e.target)
})