const User={
    name:"Sreeparna Paul",
    email:"sree@yopmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}
let newUser={name:"Sree",isPaid:false,email:"sree@gmail.com"}
createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"react",price:1000}
}
export {}