class Product {
    constructor(product, id) {
        this.product = product;
        this.id = id;
    }
}

class ShoppingCart {
    constructor() {
        this.array = [];
    }
    add(product) {
        this.array.push(product);
    }
    remove(id) {
        this.array = this.array.filter(i => i.id !== id);
    }
    clear() {
        this.array = [];
    }
    get total() {
        return this.array;
    }
}

const shoppingCart = new ShoppingCart();
const apple = new Product('apple', 1);
const mouse = new Product('mouse', 13);
const screen = new Product('screen', 24);
shoppingCart.add(apple);
shoppingCart.add(mouse);
shoppingCart.add(screen);
console.log(shoppingCart.total);
shoppingCart.clear();
console.log(shoppingCart.total);
shoppingCart.add(apple);
shoppingCart.add(mouse);
shoppingCart.add(screen);
console.log(shoppingCart.total);
shoppingCart.remove(13);
console.log(shoppingCart.total);

