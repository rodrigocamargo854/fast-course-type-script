//accountInfo
//charInfo
type accountInfoTypes = {
    id: number
    name:string
    email?:string//optional
}
//optional let var like string or undefined

const account: accountInfoTypes={
    id:12345,
    name: 'Rodrigo',
    email: 'rodrigo@gmail.com'
}


type CharInfoTypes = {
    nickName: string,
    level:number
}

const char : CharInfoTypes ={
    nickName:'Rodrigo',
    level:11
}

//types intersection

type PlayerInfoTypes = accountInfoTypes & CharInfoTypes

const player : PlayerInfoTypes = {
id:5464564,
name:'Rodrigo',
level:5,
nickName:'asda',
email:'da@gmail.com'
}