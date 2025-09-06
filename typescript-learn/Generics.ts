// Generics
// Functions, Arrays reusable

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val

}

identityThree(123)
identityThree("122333")


function identityFour<T>(val: T): T {
    return val

}

identityFour(123)
identityFour("122333")


function identityFive<T, R>(val: T, transformer: (input: T) => R): R {
    return transformer(val);
}

interface Bootle{
    brand:string
    size:string
}

type Water = {
    ltrs:number
}

let out = identityFive(123, (x) => x.toString());
console.log(out)
let bootle:Bootle = {brand:"XYZ", size:"Large"}
let water = identityFive<Bootle, Water>(bootle, (x)=>{
    let output:Water= {ltrs : 10}
    if (x.size === "Large"){
        output.ltrs += 20
    }
    return output;
})
console.log(water)


function identitySix<T extends Bootle, R>(val: T): R {
    let output:Water= {ltrs : 10}
    if (val.size  === "Large"){
        output.ltrs += 20
    }
    return output as R;
}
water = identitySix<Bootle, Water>(bootle)