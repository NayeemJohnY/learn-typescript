// TS - Statically Typed Langage

let marks: number
marks = "ss"

// Type interference - at Compile Time
let fNmae = "John"
fName = 40

// Type Annotations
let n : number = 50

let iActive: boolean = true
isActive = 1

// null  and undefined
let city:null = null
city = "NY"

let country:undefined = undefined
country = "USA"

// any
let value:any = 80
value = "Dev"
value = true

// void - not return a value
function printHello():void{//return type - vpid , explict
    console.log("Hello world")
    // return 123;
}

function getAge():number{//return type - vpid , explict
    // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value
    console.log("Hello world")
    // return "ss";
    return 123
}

// Type Annotations
function getCity():any{
    console.log("Hello world")
    // return "ss";
    // return 123
}

// Function params
function addtion (a, b){
    return a+b;
}

addtion(10, 20);


function addtion1 (a:number, b:number):number{
    return a+b;
}

addtion1(12, 30)