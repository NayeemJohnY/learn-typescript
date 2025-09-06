if (true) {
    console.log("pass");
}
else {
    console.log("Fail");
}
var val = 100;
if (val == 100)
    console.log("HIGH");
else
    console.log("LOW");
var x = 100, y = 210, z = 20;
if (x > y && x > z)
    console.log("X");
else if (y > z)
    console.log("Y");
else
    console.log("Z");
// > < >= <= != == 
// Ternary operator
x > y ? console.log("x  > y") : console.log("y > x");
var browser = "firefox";
browser == "chrome" ? console.log("Launch chrome") : browser == "firefox" ? console.log("Launch Firefox") : console.log(-1);
