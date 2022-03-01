class UserAccount{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

}

type Uid = number | string
//union and aliases
function logDetails(uid: Uid,item:string) {
    console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid,item:string) {
    console.log(`A product with ${uid} has a title as ${item}`)
}

logDetails(3232,"eewe")
logDetails("wewr","eewe")

type Plataform = 'windows' | 'linux' | 'macOs'

function renderPlatform(plataform : Plataform) {
    return plataform
}

renderPlatform('linux')
renderPlatform("macOs")


class CharAccount extends UserAccount{
    nickName:string;
    level:number;
    constructor(nickName:string,level:number,name:string,age: number){
        super(name,age);
        this.level = level;
        this.nickName = nickName;
    }
}

const newAvatar = new CharAccount('jhon',11,'Rodrigo',18)
console.log(newAvatar)