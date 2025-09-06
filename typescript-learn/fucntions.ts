// function addTwo(num) {
//     num.toUpperCase()
//     return num + 2
// }


// addTwo(5)
// addTwo("3")


function addTwo(num: number): number {
    // num.toUpperCase()
    // return num + 2
    // return "Hello"
}


addTwo(5)
// addTwo("3")

let value = addTwo(5)


function getUpper(val: string) {
    return val.toUpperCase()
}

// getUpper(4)
getUpper("value")



function signUpUser(name: string, email: string, isPaid: boolean) {

}

signUpUser("Name", "lasdas@ppol.com", false)


let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("nayeem", "sss@pol.com")


function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 OK"
}

const getHello = (s: string): string => { return "hello" }


// const fruits = ["APple", "Mango", "banana"]
const fruits = [1, "Mango", true]

// fruits.map((fruit:string|number|boolean) => {return `Fruit is ${fruit}`})
fruits.map(fruit => {return `Fruit is ${fruit}`})
fruits.map((fruit):string => {return `Fruit is ${fruit}`})


function consoleError(errorMsg:string):void{
    console.log(errorMsg);
    // return 1
}

function handleError(errorMsg:string):never{
   throw new Error(errorMsg);
}