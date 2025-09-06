// named fucntion
function testFunction1() {
    console.log("Test Function");
}
testFunction1();
// void type function
function testFunction2(a, b) {
    console.log(a + b);
}
testFunction2(10, 20);
function testFunction3(a, b, c) {
    var total = a + b + c;
    return total;
}
console.log(testFunction3(10, 20, 30));
// Anonymous fucntion
var testFunction4 = function () {
    console.log("function4");
};
testFunction4();
var testFunction5 = function (x, y) {
    return x * y;
};
console.log(testFunction5(10, 20));
// Arrow Functions
var testFunction6 = function () {
    console.log("Arrow function");
};
testFunction6();
var testFunction7 = function (x, y) { return x / y; };
console.log(testFunction7(10, 20));
var Person = /** @class */ (function () {
    function Person(fName, age) {
        var _this = this;
        this.display = function () { return console.log(_this.fName + " " + _this.age); };
        this.fName = fName;
        this.age = age;
    }
    return Person;
}());
var p = new Person("John", 27);
p.display();
// Optional and default paramters
function testOps(firstName, age) {
    return firstName + " " + age;
}
console.log(testOps("John"));
function testDefaultParams(firstName, age) {
    if (age === void 0) { age = 30; }
    return firstName + " " + age;
}
console.log(testDefaultParams("John"));
console.log(testDefaultParams("Dev", 22));
function display(a) {
    return typeof (a) === "string" ? "Welcone " + a : a * 2;
}
console.log(display(10));
console.log(display("John"));
var array = ["test1", "Test2", "Test3"];
array.forEach(function (element) {
    console.log(element);
});
