let myday = "Wednesday"

switch (myday.toLowerCase()) {
    case "monday":
        console.log("It is Day Monday")

    case "wednesday":
        console.log("It is Day Wednesday")
    
    case "Thursaday":
        console.log("It is Day Thursaday")

    default:
        console.log(`It is ${myday}` );
        // break;

    case "Friday":
        console.log("It is Day Friday")
}

enum Browsers{
    FIREFOX = "firefox",
    CHROME = "CHROME"
}

let browserName:string = Browsers.CHROME

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