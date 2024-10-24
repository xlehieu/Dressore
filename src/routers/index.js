import siteRouter from './siteRouter.js';
import productsRouter from './productsRouter.js';
export default function routes(app) {
    app.use('/products',productsRouter)
    app.use('/', siteRouter);
}
