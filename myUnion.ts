let score: number|string|boolean= 34


type User={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let newUser:User|Admin={name:"Sree",id:23}
newUser={username:"Sreeparna",id:23}

function getDbId(id: number|string){
    if(typeof id ==="string"){
        id.toLowerCase()
    }
    console.log(`id is ${id}`);
}
getDbId(4)// getDbId("8")

//array

const data:number[]=[1,2,3,4,5]
const data2:string[]=["1","2","3","4","5"]
const data3:(string|number|boolean)[]=["1","2","3","4","5",8,6,false]

let seatAllotment:"aisle"|"middle"|"window"
seatAllotment="aisle"
// seatAllotment="crew" -->throw error

export {}