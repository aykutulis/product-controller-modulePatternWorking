const products = [
    { name: 'Galaxy 5', price: 3000 },
    { name: 'Galaxy 6', price: 4000 },
    { name: 'Galaxy 7', price: 5000 }
];

let ProductController = (function (data) {
    // Private Section
    let collections = [...data];

    const addProduct = function (product) {
        collections.push(product);
    }

    const removeProduct = function (product) {
        let index = collections.indexOf(product);

        if (index >= 0) {
            collections.splice(index, 1);
        } else {
            console.log('The product has not been found');
        }
    }

    const getProducts = function () {
        console.log(collections);
    }

    // Public Section
    return {
        addProduct,
        removeProduct,
        getProducts
    }
})(products);

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

ProductController.getProducts();

// Module Extending
let extended = (function (m) {
    m.sayHello = function () {
        console.log('Hello from extended module.');
    }

    return m;

})(ProductController || {});

extended.sayHello();
extended.getProducts();
