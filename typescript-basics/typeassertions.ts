// TSC
// Way to tell complier - Don't infer about the Type , I know more 

// using <> and using as

// overriding TS interference
let digits: any = 123;
let final = <number>digits // converting into number 


let someValue:any =  "Any any any";
console.log((someValue as string).length);

let flag: any  = true
if (flag as boolean)
    console.log("Flag true");
    