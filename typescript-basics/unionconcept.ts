
let userId : (string | number) = "NNN"
let userId1 : (string | number) = 1000

userId = true

function getUserInfo(customerId:(string|number)) {
    if (typeof(customerId) === "number")
        console.log(customerId + 1) 
    else if (typeof(customerId) == "string")
        console.log(customerId) 
}

getUserInfo(9001)
getUserInfo("YYYUUU")
getUserInfo(true)