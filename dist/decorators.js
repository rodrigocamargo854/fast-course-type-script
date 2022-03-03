"use strict";
//@Component
//@Select
//@UseState("")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion("2.0.0")
    ], API);
    return API;
}());
//no momento que um objeto desta classe for criada, ja sera criada com a versao setada
console.log(new API());
//!-2
//Property decorator
//valitaditon function
// function minLenght(lenght: number) {
//   return (target: any, key: string) => {
//     let val = target[key];
//     const getter = () => val;
//     const setter = (value: string) => {
//       if (value < lenght) {
//         console.log(
//           `Error: você não pode criar ${key} com tamanho menor que ${lenght}`
//         );
//       } else {
//         val = value;
//       }
//     };
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   };
// }
// class Movie {
//   @minLenght(3)
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const movie = new Movie("erewwwe");
// console.log(movie.title);
//!-3
//Method decorator
//roda toda vez que o metodo for chamado
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    //esperar um tempo e rodar o metodo
    Greeter.prototype.greet = function () {
        console.log("hello " + this.greeting);
    };
    __decorate([
        delay(5000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("pessoinha");
pessoinha.greet();
//!-4
//Parameter decorator
//!-5
//Acessor decorator
