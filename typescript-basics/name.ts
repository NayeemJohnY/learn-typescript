console.log("Hello Typescript")
//.ts -> tsc TS compiler  -> .js -> javascript run env (node, browser)


function getInfoTest() {
    if (firstName.length > 10){ // compile time error : Cannot find name 'firstName
        console.log("PASS")
    } else {
        console.log("FAIL");
        
    }
}

getInfoTest();


const user = {
    firstName : "Tom",
    age : 30
}

console.log(user.city); // Property 'city' does not exist on type



let age : number = 30;
let fName: string = "Tom";
let isActive: boolean = true;




