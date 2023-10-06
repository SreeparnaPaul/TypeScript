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
type Customer={
    name:string;
    email:string;
    isActive:boolean
}
function createCustomer(customer:Customer):Customer{
    return {
        name:customer.name,
        email:customer.email,
        isActive:customer.isActive
    }
}
createCustomer({
    name:"Sreeparna Paul",
    email:"sree@yopmail.com",
    isActive:true
}
)

type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}

type cardDetails= cardNumber & cardDate &{
    cvv : number
}
export {}