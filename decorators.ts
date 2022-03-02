//@Component
//@Select
//@UseState("")

//Factory

// function logger(prefix:string){
//     return (target) => {
//         console.log(target);
//     };
// }

// @logger('aewsome')
// class Foo{

// }

//!-1
//Class Decorator - anotar a versaão da API
//quando a API for criada já sera criada com uma versão
function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setAPIVersion("2.0.0")
class API {}

//no momento que um objeto desta classe for criada, ja sera criada com a versao setada
console.log(new API());

//!-2
//Property decorator

//valitaditon function
function minLenght(lenght: number){
    return (target:any,key: string ) => {
       let val = target[key]

       const getter = () => val;

       const setter = (value:string) =>{
         if(value.lenght < lenght){
           console.log(`Error: você não pode criar ${key} com tamanho menor que ${lenght}`)
         }else{
           val =value
         }
       }
       Object.defineProperty(target,key,{
         get: getter,
         set:setter
       })
    }
}
class Movie {
    @minLenght(50)
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("wreer")
console.log(movie.title);

//!-3
//Method decorator
//!-4
//Parameter decorator
//!-5
//Acessor decorator
