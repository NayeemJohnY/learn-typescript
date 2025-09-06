function detectTypes(val: number | string) {
    // return val.toLowerCase()
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide Id")
        return
    }
    return id.toLowerCase()
}

function printAll(strs: string|string[]|null){
    if (strs){
        if (typeof strs === "object"){
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string"){
            console.log(strs);
        }
        
    }
}

// instance of with new 

function logValue(x:Date|string){
    if (x instanceof Date){
        console.log(x.toISOString());
    } else {
        console.log(x.toLowerCase())
    }
}

// Type predicates
type Fish = {swim: ()=> void};
type Bird = {fly: ()=> void};
function isFish(val:Fish|Bird):val is Fish{
    return (val as Fish).swim !== undefined
}

function getFood(val:Fish|Bird){
    if (isFish(val)){
        return `Food for Fish ${val}`
    } else {
         return `Food for Bird ${val}`
    }
}