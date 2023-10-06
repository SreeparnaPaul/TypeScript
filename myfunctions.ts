function addNum(num:number){
    return num+2;
}
addNum(5)

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("abc")

function signUpUser(name:string, email:string,isLoggedIn:boolean){

}
let loginUser=(name:string, email:string,isLoggedIn:boolean=false)=>{

}
loginUser("abc","abc@yopmail.com")
signUpUser("abc","abc@yopmail.com",false)
const getHello= (s:string):string=>{
    return "cdfd"
}
const heros=["thor","ironman"]
heros.map((hero):string=>{
    return `hero is ${hero}` 
}
)

function consoleError(errMsg:string):void{
    console.log(errMsg);
    
}
function handleError(errMsg:string):never{
    throw new Error(errMsg);
}
export {}