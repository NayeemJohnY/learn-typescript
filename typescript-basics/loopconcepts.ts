// for loop
// 3 times
// index loop
for (let i= 1; i<=10; i++){
    console.log(i)
    if (i == 5)
        break;
}
// for.. of
let forNumbers = [100, 200, 400, 600]
for (let n of forNumbers)
    console.log(n)

// for.. in
for (let index in forNumbers)
    console.log(index + " " + forNumbers[index])

let typeEmployees = {username: "K@gmail.com", password: "password123", age:27}
for (let x in typeEmployees)
    console.log(x + " " + typeEmployees[x])

let word = "Hello TypeScript";
for (let c of word)
    console.log(c)

// while
let p =1 
while (p <=10){
    console.log(p);
    p++;
}
console.log("=========================")
// do while
let q = 1
do {
    console.log(q);
    q++;
}while(q < 0)
