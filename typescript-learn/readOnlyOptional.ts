
type Item = {
    readonly _id: string
    name: string
    stockCount: number
    lastPurchased?: Date
}

type Orders = {
    readonly _orderId: number,
    orderDate: Date
    item: Item
}

type Orders1 = Item & {
    readonly _orderId: number,
    orderDate: Date

}

let order: Orders = { _orderId: 1, orderDate: new Date(), item: { _id: "Item1", name: "Item Name", stockCount: 10 } }


let order1: Orders1 = { _id: "Item1", name: "Item Name", _orderId: 1, orderDate: new Date(), stockCount: 10 }

type Basket = Item[]

let item: Item = {
    _id: "Item_1",
    name: "Apple",
    stockCount: 10
}

let basket: Basket = [];

basket.push(item)
basket.push(item)
basket.push(item)
basket.push(item)

item._id = 1234
item.name = "Mango"