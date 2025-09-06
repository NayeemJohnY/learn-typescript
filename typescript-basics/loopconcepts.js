// for loop
// 3 times
// index loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5)
        break;
}
// for.. of
var forNumbers = [100, 200, 400, 600];
for (var _i = 0, forNumbers_1 = forNumbers; _i < forNumbers_1.length; _i++) {
    var n = forNumbers_1[_i];
    console.log(n);
}
// for.. in
for (var index in forNumbers)
    console.log(index + " " + forNumbers[index]);
var typeEmployees = { username: "K@gmail.com", password: "password123", age: 27 };
for (var x in typeEmployees)
    console.log(x + " " + typeEmployees[x]);
var word = "Hello TypeScript";
for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
    var c = word_1[_a];
    console.log(c);
}
// while
var p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}
console.log("=========================");
// do while
var q = 1;
do {
    console.log(q);
    q++;
} while (q < 0);
