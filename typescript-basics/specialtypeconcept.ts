// any
let num : any = [100, 200]

let something: any
something = 123
something = "NAYEEM"
something = [1,2, 4]

let lang: any[] = ["Naveen", 33, true]

function add(a:number, b:number):any {
    if (a < b)
        return a+b
    console.log("SSSS")
}

add(10, 20)


// void - No return type
let num1: void = 10 // Type 'number' is not assignable to type 'void'.ts(
num1 = "sss"
num1 = null
num1 = undefined 


// never - Cannot hold anything
let nothing: never = null// never will be occur
function throwError(msg : string):never {
    throw new Error(msg); // on Error
}