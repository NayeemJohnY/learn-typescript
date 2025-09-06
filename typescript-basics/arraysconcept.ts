let emmpty = [] // type - never
let names = ["Na", "YN"] // type - string
let scores:number[] = [] //Type 'never[]' is not assignable to type 'number'
let employees : Array<string> = ["NY", "YN", true, 123]
let info : Array<any> = ["NY", "YN", true, 123]

// multi type array
let values : (string | number)[] = ["NY", "YN", 123, 345, true]
let value1 : Array<string | boolean> = ["NY", 123, true, false]


let users: string[]
users = ["Peter", "John"]


// iterator
for (let i = 0; i < users.length; i++){
    console.log(users[i])
}

for (let user of users)
    console.log(user)

for (let index in users)
    console.log(users[index])