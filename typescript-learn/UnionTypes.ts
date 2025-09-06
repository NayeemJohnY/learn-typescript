let score:number | string | boolean = 33

score = 44
score = "55"
score = true
score = [1, 2, 4]

type User = {
    name : string
    id : number,
}

type AdminUser = {
    name : string
    id : number,
    role : string 
}


let john : User | AdminUser = {name:"John", id:123}
john = {name:"John", id:123, role:"Admin"}


function getObjectID(nameOrId: number|string){
    // nameOrId.toUpperCase()
    if (typeof nameOrId === "string"){
        nameOrId.toUpperCase()
    }
    return new Object("6544322s782344454")
}

getObjectID(3)
getObjectID("Johnnnn")


// array
const data:number[] = [1, 2, 3, "4"]

const data2:string | number[] = [1, 2, 3, "4"]

const data3:string[] | number[] = [1, 2, 3, "4"]

const data4:(string | number)[] = [1, 2, 3, "4"]

let pi:3.14 = 3.14

pi=3.15

let seatAllotment : "aisle"| "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew"