//MOUNTAINS
interface Mountain {
    name: string,
    height: number
}


let mountains: Mountain[] = [
    { 
        name: 'Kilimanjaro', height: 19341 },
    { 
        name: "Everest", height: 29029 },
    { 
        name: "Denali", height: 20310 }
]

function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestMountain = mountains[0];
    mountains.forEach(mountain => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
}

let result = findNameOfTallestMountain(mountains);
console.log("The Tallest Mountain is: " + result);


//PRODUCTS

interface Product {
    name: string,
    price: number
}

let products: Product[] = [
    { name: 'hair brush', price: 6 },
    { name: "shampoo", price: 5 },
    { name: "conditioner", price: 5 }
]   

function calcAverageProductPrice(products: Product[]): number {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice / products.length;
}

let averagePrice = calcAverageProductPrice(products);
console.log("The average price of the products is: " + averagePrice);

//INVENTORY
interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
]

function calcInventoryValue(inventory: InventoryItem[]): number {
    let totalValue = 0;
    inventory.forEach(item => {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
}

let totalValue = calcInventoryValue(inventory);
console.log("The total value is: " + totalValue);