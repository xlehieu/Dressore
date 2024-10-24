import express from 'express';
import * as ProductController from '../app/Controller/ProductController.js';
const productsRouter = express.Router();

productsRouter.get('/', ProductController.products);


export default productsRouter;