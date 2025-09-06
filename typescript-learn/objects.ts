let User = {
    name : "Nayeem",
    email: "Nadsa@oil.com",
    isActive: true
}  

function createUser({name:string, isPaid:boolean}){

}

createUser({name:"nayeem", isPaid: true})


function createCourseDummy():{}{
    return {}
}

function createCourse():{name:string, price:number}{
    return {name:"TS", price:38}
}


// odd behaviour

createUser({name:"nayeem", isPaid: true, email:"asdsa@oil.com"})

let user = {name:"nayeem", isPaid: true, email:"asdsa@oil.com"}

createUser(user)
