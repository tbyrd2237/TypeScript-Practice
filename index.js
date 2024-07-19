var mountains = [
    {
        name: 'Kilimanjaro', height: 19341
    },
    {
        name: "Everest", height: 29029
    },
    {
        name: "Denali", height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    mountains.forEach(function (mountain) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
}
var result = findNameOfTallestMountain(mountains);
console.log("The Tallest Mountain is: " + result);
var products = [
    { name: 'hair brush', price: 6 },
    { name: "shampoo", price: 5 },
    { name: "conditioner", price: 5 }
];
function calcAverageProductPrice(products) {
    var totalPrice = 0;
    products.forEach(function (product) {
        totalPrice += product.price;
    });
    return totalPrice / products.length;
}
var averagePrice = calcAverageProductPrice(products);
console.log("The average price of the products is: " + averagePrice);
var inventory = [
    { product: { name: 'motor', price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (item) {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
}
var totalValue = calcInventoryValue(inventory);
console.log("The total value is: " + totalValue);
