var myday = "Wednesday";
switch (myday.toLowerCase()) {
    case "monday":
        console.log("It is Day Monday");
    case "wednesday":
        console.log("It is Day Wednesday");
    case "Thursaday":
        console.log("It is Day Thursaday");
    default:
        console.log("It is ".concat(myday));
    // break;
    case "Friday":
        console.log("It is Day Friday");
}
var Browsers;
(function (Browsers) {
    Browsers["FIREFOX"] = "firefox";
    Browsers["CHROME"] = "CHROME";
})(Browsers || (Browsers = {}));
var browserName = Browsers.CHROME;
switch (browserName) {
    case Browsers.CHROME:
        console.log("In CHROME");
        break;
    case Browsers.FIREFOX:
        console.log("In FIREFOX");
        break;
    default:
        break;
}
