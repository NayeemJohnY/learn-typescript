// Tuple - Fixes size and order matters - define and data

let person:[string, number] = [11111, 2, 3]
let person1:[string, number] = ["11111", 2, 3]
let person2:[string, number, boolean] = ["11111", 2, true]

console.log(person[0], person[1])

// array of value
let person4:[string, number][] = ["NY", 1] 
let person5:[string, number][] = [["NY", 1], [1, "TR"]] 
let person6:[string, number][] = [["NY", 1], ["TR", 1], ["WS", 33]] 
person6.push("NYAAA", 1)
person6.push(["NYAA", 1])
console.log(person6[0])
console.log(person6[1][0])
console.log(person6[10])


let customer:[string, number] = ["NY", 1]
customer.push("HH", "200") // push is allowed, but while declare only number of type is allowed
console.log(customer)