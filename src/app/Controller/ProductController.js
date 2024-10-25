import Product from '../Model/ProductModel.js';
import { arrToObj } from '../../utils/index.js';
export function products(req, res) {
    Product.find()
        .then((products) => {
            res.render('products', { layout: 'sub', products: arrToObj(products) });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).send('Error');
        });
}
