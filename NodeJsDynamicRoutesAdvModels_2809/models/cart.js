const path = require('path');
const fs = require('fs');

const pathToData = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(pathToData, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(fileContent);
            }
            //Analyze the cart => Find exisitng products
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;

            //Add new product + Increase quantity
            if (existingProductIndex !== -1) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;

                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };

                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice += +productPrice;

            fs.writeFile(pathToData, JSON.stringify(cart), (err) => {
                if (err) {
                    console.log("Error during saving cart", err);
                }
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(pathToData, (err, fileConent) => {
            if (err) {
                return;
            }

            const updatedCart = { ...JSON.parse(fileConent) };

            const product = updatedCart.products.find(prod => prod.id === Number(id));

            if (product) {
                const productQty = product.qty;
    
                updatedCart.products = updatedCart.products.filter(prod => prod.id !== Number(id));
                updatedCart.totalPrice = updatedCart .totalPrice - productPrice * productQty;
    
                fs.writeFile(pathToData, JSON.stringify(updatedCart), err => {
                    console.log(err);
                })
            }
        })
    }
}