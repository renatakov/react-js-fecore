export const sumNum = (a,b) => {
    if(!a || !b){
        return "Error"
    }
    return a+b
}

export const userName = (name) => {
    if(name != "RenataKov"){
        return "Wrong Username"
    }
    if(!name){
        return "Hello Stranger!"
    }
    return `Hello ${name}!`
}