
// named fucntion
function testFunction1() {
    console.log("Test Function")
}

testFunction1();

// void type function
function testFunction2(a: number, b: number):void{
    console.log(a + b);
}

testFunction2(10, 20);

function testFunction3(a: number, b: number, c: number): number {
    let total = a + b + c;
    return total;
}

console.log(testFunction3(10, 20, 30));

// Anonymous fucntion
let testFunction4 = function(){
    console.log("function4")
}

testFunction4();

let testFunction5 = function(x:number, y:number):number{
    return x*y;
}

console.log(testFunction5(10, 20));


 // Arrow Functions

let testFunction6 = ()=> {
    console.log("Arrow function")
}

testFunction6()

let testFunction7 = (x:number, y:number):number => x/y;

console.log(testFunction7(10, 20))

class Person{
    fName : string;
    age: number;

    constructor(fName:string, age:number) {
        this.fName = fName;
        this.age = age;
    }

    display = () => console.log(this.fName + " " + this.age);

}
let p = new Person("John", 27);
p.display()

// Optional and default paramters
function testOps(firstName:string, age?:number):string {
    return firstName + " " + age
}

console.log(testOps("John"));

function testDefaultParams(firstName:string, age:number=30):string {
    return firstName + " " + age
}

console.log(testDefaultParams("John"));
console.log(testDefaultParams("Dev", 22));


// Functional Overloading

// Number of parameters should be same // prototype
function display(a:string):string;
function display(a:number):number;

function display(a:any): any{ // implementation
    return  typeof(a) === "string" ? "Welcone "+ a : a*2 
}

console.log(display(10))
console.log(display("John"))

let array = ["test1", "Test2", "Test3"]
array.forEach(element => {
    console.log(element);
});