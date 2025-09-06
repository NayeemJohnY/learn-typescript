// enumm - Enumeration data types - hold of constants

// Number type - numeric
enum Browser {
    CHROME,
    FIREFOX,
    EDGE,
    SAFARI
}

console.log(Browser.CHROME)
console.log(Browser)
console.log(Browser[3]) // Safari
console.log(Browser[4]) // undefined


enum Browser1 {
    CHROME, // Chome = 0
    FIREFOX =5,
    EDGE, // Edge = 6
    SAFARI=10, // Safaru = 10
    WEBKIT
}

console.log(Browser1.EDGE)

enum Browser2 {
    FIREFOX,
    EDGE,
    SAFARI,
    WEBKIT = getVersion("chrome")*12,
    CHROME = getVersion("chrome"),
}

function getVersion(browserName:string):number{
    if (browserName == "chrome")
        return 121
    return -1
}

console.log(Browser2.EDGE)
console.log(Browser2.CHROME)
console.log(Browser2.WEBKIT)

// String enums
enum envs {
    dummy,
    DEV = "dev",
    QA = "qa",
    STAGE = "stage",
    PROD = "prod"
}
console.log(envs.QA)
console.log(envs["QA"])


// hetogeneious
enum Status{
    ACTIVE  = "Active",
    INACTIVE = 2,
    PENDING
}

console.log(Status.PENDING)