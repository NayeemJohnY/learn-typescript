

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(10, "20")
anotherFunction(10, 20)


interface DB {
    connection: string
    username: string
    password: string
}

function dbFunction<T, U extends DB>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

dbFunction(3, {})

interface Quiz {
    name: string
    type: string
}


interface Course {
    name: string
    author: string
    subject?: String
}

class Sellable<T> {
    public cart: T[] = []
    addToCart(product: T) {
        this.cart.push(product)
    }
}

let quizSellable = new Sellable<Quiz>()
quizSellable.addToCart({ name: "Quiz1", type: "MC" })


let courseSellable = new Sellable<Course>()
courseSellable.addToCart({ name: "Course1", author: "MC" })