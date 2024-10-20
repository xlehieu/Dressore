import siteRouter from './siteRouter.js';
export default function routes(app) {
    app.use('/', siteRouter);
}
