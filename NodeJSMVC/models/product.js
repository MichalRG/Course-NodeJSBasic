const fs = require('fs');
const path = require('path');

const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const pathToManage = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'product.json'
        );
        
        fs.readFile(pathToManage, (err, fileContent) => {
            let products = [];

            if (!err) {
                products = JSON.parse(fileContent);
            }

            products.push(this); 

            fs.writeFile(pathToManage, JSON.stringify(products), (err) => {
                console.error(err);
            });
        });
    }

    static fetchAll(cb) {
        const pathToRead = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'product.json'
        );

        fs. readFile(pathToRead, (err, fileContent) => {
            if (err || !fileContent) {
                return cb([]);
            }

            cb(JSON.parse(fileContent));
        });
    }
}