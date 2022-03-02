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

//!-3
//Method decorator
//!-4
//Parameter decorator
//!-5
//Acessor decorator
