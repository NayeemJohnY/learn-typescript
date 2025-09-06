

function getSearchProducts<T>(products: T[]):T {
    return products[3]
}

const getFourProducts = <T>(products: T[]):T[] => {
     return products.slice(0, 5)
}

const getFiveroducts = <T, >(products: T[]):T[] => {
     return products.slice(0, 5)
}
