interface User{
    readonly dbId :number,
    email:string,
    userId: number
    googleId?:string,
    startTrial:()=>string
    //startTrial():string -->this is another way
    getCoupon(couponName:string, off:number):number
}

//adding new variable, if i don't know where the interface is
interface User{
    githubToken:string
}
//with extends keyword admin will inherits all the properties of User
interface Admin extends User{
    role:"admin"|"ta"|"learner"
}
const hitesh:Admin={dbId:34,email:"h@h.com",userId:123,
githubToken:"github",
role:"admin",
startTrial:()=>{
    return "trial started"
},getCoupon:(name:"sree",off:10)=>{
    return off
}}
hitesh.email="sree@gmail.com"
export {}