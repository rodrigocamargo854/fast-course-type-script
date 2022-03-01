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


