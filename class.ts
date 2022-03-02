export class Account {
  name: string;
  local: string;
  age: number;
  isLogged: boolean;
  constructor(
    name: string,
    local: string,
    age: number,
    isLogged: boolean = false
  ) {
    this.name = name;
    this.local = local;
    this.age = age;
    this.isLogged = isLogged;
  }
  isLoggedin(): string {
    if (this.name && this.isLogged) {
      return `${this.name} logged in`;
    }
    return `${this.name} loged out`;
  }
  //**********************/
  //getter and setter
  get getLoginStatus(){
    console.log('-------LOGIN STATE-------')
    return this.isLogged
  }

  set setUserNAme(name: string){
    this.name = name;
  }
}
//classe apenas para modelo para outras classe, podemos extender mais nao podemos utilziar para ciração de novos users
abstract class userAccountModel{
  abstractName : string;
  constructor(abstractName: string){
    this.abstractName = abstractName;
  }
}
  //**********************/

const user = new Account('Rodrigo','Brasil',11,true);
console.log(user.isLoggedin())
console.log(user.getLoginStatus)//retorna o estado do login do usuario
console.log(user.setUserNAme='Willian')//podemos setar (alterar) dados de uam variavel 


